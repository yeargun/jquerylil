import { readFileSync, writeFileSync } from "node:fs"
import { auditNames } from "./audit-names.mjs"
import { measuredBars, refreshReadme } from "./readme-tables.mjs"
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

// jQuery's own Git source, bundled as ESM and minified by Terser, from the
// paired source build that also records the build times (site/comparison.json).
const sourceBuilt = JSON.parse(readFileSync(join(root, "site", "comparison.json"), "utf8")).esm.original

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
    { id: "sourceTerser", name: "jQuery source ESM + Terser", raw: sourceBuilt.raw, gzip9: sourceBuilt.gzip9, brotli11: sourceBuilt.brotli11, note: "jQuery's Git source at the 3.7.1 tag, bundled as ESM by esbuild and minified by Terser (site/esm-comparison/original.js)" },
    { id: "itslil", name: "@itslil/jquery", ...sizes.library.itslil, note: "LilScript compiler output; the build adds only the license banner and `export default`", primary: true },
  ],
  bars: measuredBars(),
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

refreshReadme(results)
