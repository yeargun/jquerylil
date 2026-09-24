// The README's number tables are generated from site/results.json, because
// hand-maintained copies of them went stale by a full percentage point between
// rebuilds. Everything outside the fences is prose and is left alone.
// write-results.mjs and record-compiler-run.mjs both call refreshReadme, so the
// tables follow whichever of them ran last.
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

// Other minifiers over jQuery's own source ESM, measured by the paired source
// build recorded in comparison/source-build/ (the same run as the build-time
// facts on the site). Terser is a size lane of its own; these are the rest.
export function measuredBars() {
  const esm = JSON.parse(readFileSync(join(root, "comparison", "source-build", "esm.json"), "utf8"))
  const lanes = [
    { id: "esbuild", file: "original.esbuild.js", name: `esbuild ${esm.toolchain.esbuild}` },
    { id: "oxc", file: "original.oxc-mangle.js", name: `Oxc (Vite ${String(esm.toolchain.vite ?? "").split(" ")[0]} minify)` },
  ]
  return {
    source: `Measured with the Terser lane: jQuery's Git source at ${esm.source.version} (${esm.source.commit.slice(0, 7)}) bundled as one ESM by esbuild, then minified by each tool; comparison/source-build/esm.json.`,
    lanes: lanes
      .map((lane) => ({ lane, artifact: esm.artifacts.find((artifact) => artifact.path === lane.file) }))
      .filter(({ artifact }) => artifact)
      .map(({ lane, artifact }) => ({ id: lane.id, name: `jQuery source ESM + ${lane.name}`, raw: artifact.raw, gzip9: artifact.gzip9, brotli11: artifact.brotli11 })),
  }
}

const times = (value) => `${value.toFixed(2)}×`
const n = (value) => value.toLocaleString("en-US")
const signed = (value) => (value < 0 ? `−${n(-value)}` : `+${n(value)}`)

export function refreshReadme(results) {
  const officialMin = results.size.find((lane) => lane.id === "officialMin")
  const ours = results.size.find((lane) => lane.primary)
  const comparison = JSON.parse(readFileSync(join(root, "site", "comparison.json"), "utf8"))
  const seconds = (value) => `${value.toFixed(2)} s`
  const spread = (lane) => `${seconds(lane.medianSeconds)} median (${seconds(lane.minimumSeconds)}–${seconds(lane.maximumSeconds)}; ${lane.samples.length} builds)`
  const machine = comparison.machine

  const bars = [
    ...results.size.filter((lane) => !lane.primary && lane.id !== "officialDev"),
    ...(results.bars?.lanes ?? []),
  ]

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
    bars: [
      "| Bar | Raw | gzip-9 | Brotli-11 | `@itslil/jquery` raw | gzip-9 | Brotli-11 |",
      "| --- | ---: | ---: | ---: | ---: | ---: | ---: |",
      ...bars.map((bar) =>
        `| ${bar.name.replace(/^Official (.+)$/, "Official `$1`")} | ${n(bar.raw)} | ${n(bar.gzip9)} | ${n(bar.brotli11)} | ${signed(ours.raw - bar.raw)} | ${signed(ours.gzip9 - bar.gzip9)} | ${signed(ours.brotli11 - bar.brotli11)} |`),
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
    compiler: [
      "| Build | Wall time | Scope |",
      "| --- | ---: | --- |",
      `| LilScript compiler, one invocation | ${seconds(comparison.build.compilerSeconds)} median | \`src/entry.lil\` → \`dist/jquery.raw.js\` |`,
      `| LilScript package | ${spread(comparison.sourceBuild.lilscript)} | \`${comparison.build.packageScope}\` |`,
      `| Original repository | ${spread(comparison.sourceBuild.original)} | \`${comparison.build.originalScope}\` in jquery ${comparison.upstream.version} (\`${comparison.upstream.commit.slice(0, 7)}\`) |`,
      `| Original comparison ESM | ${seconds(comparison.build.originalEsmSeconds)} median | esbuild bundle + Terser, recorded separately |`,
      "",
      `Measured ${comparison.measuredAt.slice(0, 10)} with LilScript [\`${comparison.compiler.commit.slice(0, 8)}\`](https://github.com/yeargun/lilscript/commit/${comparison.compiler.commit}) (binary SHA-256 \`${comparison.compiler.sha256}\`) on Azure ${machine.instanceClass}, ${machine.cpu}, ${machine.logicalCpus} vCPUs, ${(machine.memoryBytes / 2 ** 30).toFixed(1)} GiB RAM, Node ${machine.node}. ${comparison.compatibility}`,
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
}
