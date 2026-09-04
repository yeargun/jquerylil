import { readFileSync, writeFileSync } from "node:fs"
import { auditNames } from "./audit-names.mjs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const sizes = JSON.parse(readFileSync(join(root, "reports", "sizes.json"), "utf8"))
const bench = JSON.parse(readFileSync(join(root, "reports", "bench.json"), "utf8"))
let compilerComparison = null
try {
  compilerComparison = JSON.parse(
    readFileSync(join(root, "site", "results.json"), "utf8"),
  ).compilerComparison ?? null
} catch {
  // Compiler history is additive and may not exist in a fresh checkout.
}

const titles = {
  todos: "Todos",
  tabs: "Tabs",
  search: "Search",
  cart: "Cart",
  accordion: "Accordion",
  gallery: "Gallery",
}
const blurbs = {
  todos: "Delegated events, html, grep, merge.",
  tabs: "show/hide and aria-selected.",
  search: "Live filter of the 3.7.1 module list.",
  cart: "Quantities and computed totals.",
  accordion: "slideToggle / slideUp effects.",
  gallery: "$.Deferred and $.when.",
}

const memoryRatios = Object.values(bench.report).map((row) => row.retainedMemory.ratio)
const retainedRatio =
  memoryRatios.reduce((sum, value) => sum + value, 0) / memoryRatios.length

const results = {
  pin: "jquery@3.7.1",
  package: "@itslil/jquery",
  node: bench.node,
  codec: sizes.codec,
  warmupDiscard: bench.warmupDiscard,
  memory: { retainedRatio },
  size: [
    { id: "officialDev", name: "Official jquery.js", ...sizes.library.officialDev, note: "published development artifact" },
    { id: "officialMin", name: "Official jquery.min.js", ...sizes.library.officialMin, note: "published minified artifact" },
    { id: "itslil", name: "@itslil/jquery", ...sizes.library.itslil, note: "LilScript compiler-selected ESM", primary: true },
  ],
  apps: Object.entries(sizes.apps).map(([id, lanes]) => ({
    id,
    title: titles[id],
    jquery: lanes.jquery,
    itslil: lanes.itslil,
  })),
  throughput: Object.entries(bench.report).map(([name, row]) => ({
    name,
    officialMs: row.performance.npmMs,
    candidateMs: row.performance.lilMs,
    ratio: row.performance.ratio,
  })),
  examples: Object.entries(titles).map(([id, title]) => ({
    id,
    title,
    blurb: blurbs[id],
  })),
  names: auditNames(),
  ...(compilerComparison ? { compilerComparison } : {}),
}

writeFileSync(join(root, "site", "results.json"), `${JSON.stringify(results, null, 2)}\n`)
console.log("wrote site/results.json")

// The README's three number tables are generated from the same report, because
// hand-maintained copies of them went stale by a full percentage point between
// rebuilds. Everything outside the fences is prose and is left alone.
const times = (value) => `${value.toFixed(2)}×`
const n = (value) => value.toLocaleString("en-US")
const officialMin = results.size.find((lane) => lane.id === "officialMin")

const tables = {
  size: [
    "| Lane | Raw | gzip-9 | Brotli-11 | vs official min |",
    "| --- | ---: | ---: | ---: | ---: |",
    ...results.size.map((lane) => {
      const cells = `${n(lane.raw)} | ${n(lane.gzip9)} | ${n(lane.brotli11)} | ${times(lane.brotli11 / officialMin.brotli11)}`
      return lane.primary
        ? `| **\`@itslil/jquery\` ESM** | **${cells.split(" | ").join("** | **")}** |`
        : `| ${lane.name.replace(/^Official (.+)$/, "Official `$1`")} | ${cells} |`
    }),
  ],
  apps: [
    "| App | jquery Brotli | @itslil/jquery Brotli | Ratio |",
    "| --- | ---: | ---: | ---: |",
    ...results.apps.map((app) =>
      `| ${app.title} | ${n(app.jquery.brotli11)} | ${n(app.itslil.brotli11)} | ${times(app.itslil.brotli11 / app.jquery.brotli11)} |`),
  ],
  perf: [
    "| Suite | jquery@3.7.1 | @itslil/jquery | Ratio |",
    "| --- | ---: | ---: | ---: |",
    ...results.throughput.map((suite) =>
      `| ${suite.name} | ${suite.officialMs.toFixed(2)} ms | ${suite.candidateMs.toFixed(2)} ms | ${times(suite.ratio)} |`),
  ],
  perfnote: [
    `Isolated Node ${results.node} processes versus \`jquery@3.7.1\`. 8 samples, first ${results.warmupDiscard} discarded, median of the rest. Ratio is \`@itslil/jquery\` / official (lower is faster). Checksums match on every suite. Mean retained memory **${times(results.memory.retainedRatio)}**.`,
  ],
  names: [
    "| Names in `dist/jquery.raw.js` | Count | Renameable |",
    "| --- | ---: | --- |",
    `| Property names, total | ${n(results.names.propertyNames)} | ${n(results.names.propertyNameBytes)} emitted bytes |`,
    `| — spellings \`${results.names.upstream}\` also ships | ${n(results.names.upstreamNames)} | no: a caller can reach them |`,
    `| — platform members (${results.names.platformNames.join(", ")}) | ${results.names.platformNames.length} | no: the host owns them |`,
    `| — invented by the port | ${results.names.leakedNames.length} | ${results.names.leakedNames.length === 0 ? "**nothing left to mangle**" : results.names.leakedNames.map((entry) => `\`${entry.name}\``).join(", ")} |`,
    `| Identifiers at one or two characters | ${n(results.names.shortIdentifiers)} of ${n(results.names.distinctIdentifiers)} | mangled whole-program |`,
    `| ESM exports | ${results.names.exports.length} | \`${results.names.exports.join("`, `")}\` |`,
  ],
}

const readmePath = join(root, "README.md")
let readme = readFileSync(readmePath, "utf8")
for (const [name, rows] of Object.entries(tables)) {
  const fence = new RegExp(`(<!-- generated:${name} -->\\n)[\\s\\S]*?(<!-- /generated:${name} -->)`)
  if (!fence.test(readme)) throw new Error(`README is missing the ${name} fence`)
  // A replacer function, not a template: `$` is a substitution escape in a
  // string replacement and the exports row legitimately contains `$`.
  readme = readme.replace(fence, (_, open, close) => `${open}${rows.join("\n")}\n${close}`)
}
writeFileSync(readmePath, readme)
console.log("refreshed the generated README tables")
