# @itslil/jquery

jQuery 3.7.1, reimplemented in [LilScript](https://github.com/yeargun/lilscript) and published as a dependency-free drop-in.

This is **not** the official `jquery` package. It is an independent runtime that implements the `jquery@3.7.1` public API.

**Site:** [yeargun.github.io/jquerylil](https://yeargun.github.io/jquerylil/)

```sh
npm install @itslil/jquery
```

```js
import { jQuery as $ } from "@itslil/jquery"

$("button").on("click", function () {
  $(this).toggleClass("on")
})
```

Alias the import if you already write `from "jquery"`:

```js
{
  "dependencies": { "@itslil/jquery": "3.7.1" },
  "overrides": { "jquery": "npm:@itslil/jquery@3.7.1" }
}
```

## Current snapshot

This is the port as it stands, built by the one LilScript compiler. The tables below are generated from the measured reports, so the comparison with official `jquery.min.js` — raw, gzip and Brotli — is whatever they say for the committed `dist/`, not a claim kept by hand. Property names are the public ABI and are not renamed — see [Names](#names).

## Size

Reusable package artifacts, measured with `lilscript-codec` gzip-9 / Brotli-11.

<!-- generated:size -->
| Lane | Raw | gzip-9 | Brotli-11 | vs official min |
| --- | ---: | ---: | ---: | ---: |
| Official `jquery.js` | 285,314 | 83,619 | 69,545 | 2.53× |
| Official `jquery.min.js` | 87,533 | 30,336 | 27,445 | 1.00× |
| jQuery source ESM + Terser | 87,468 | 30,497 | 27,675 | 1.01× |
| **`@itslil/jquery` ESM** | **76,017** | **28,349** | **25,487** | **0.93×** |
<!-- /generated:size -->

The published ESM is the LilScript compiler output plus a license banner and a default export. It is not pretty-printed and not run through Terser or any other minifier; the CJS and UMD files are the same output with the export clause swapped for `module.exports` or dropped. `node scripts/write-results.mjs` regenerates the tables in this file from `reports/`, so they cannot drift from the artifact again.

Against the other minifiers. Official `jquery.min.js` is the file jQuery publishes. The source-built lanes are jQuery's own Git source at the 3.7.1 tag, bundled into one ESM by esbuild and minified by Terser, esbuild or Oxc, measured in the same run as the build times below (`comparison/source-build/esm.json`). The last three columns are `@itslil/jquery` minus the bar.

<!-- generated:bars -->
| Bar | Raw | gzip-9 | Brotli-11 | `@itslil/jquery` raw | gzip-9 | Brotli-11 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Official `jquery.min.js` | 87,533 | 30,336 | 27,445 | −11,516 | −1,987 | −1,958 |
| jQuery source ESM + Terser | 87,468 | 30,497 | 27,675 | −11,451 | −2,148 | −2,188 |
| jQuery source ESM + esbuild 0.28.1 | 88,320 | 31,538 | 28,665 | −12,303 | −3,189 | −3,178 |
| jQuery source ESM + Oxc (Vite 8.2.1 minify) | 87,418 | 30,562 | 27,765 | −11,401 | −2,213 | −2,278 |
<!-- /generated:bars -->

## Example app bundles

Same six apps, Vite production minify, official `jquery@3.7.1` vs `@itslil/jquery`. The number is the emitted JS chunk.

<!-- generated:apps -->
| App | jquery Brotli | @itslil/jquery Brotli | Ratio |
| --- | ---: | ---: | ---: |
| Todos | 28,847 | 26,475 | 0.92× |
| Tabs | 28,634 | 26,271 | 0.92× |
| Search | 28,737 | 26,413 | 0.92× |
| Cart | 28,877 | 26,532 | 0.92× |
| Accordion | 28,548 | 26,275 | 0.92× |
| Gallery | 28,790 | 26,490 | 0.92× |
<!-- /generated:apps -->

Vite minifies both lanes, so this is what an app ships, not the published file; the ratio column is the result.

## Performance

<!-- generated:perfnote -->
Isolated Node v24.11.1 processes versus `jquery@3.7.1`. 8 samples, first 2 discarded, median of the rest. Ratio is `@itslil/jquery` / official (lower is faster). Checksums match on every suite. Mean retained memory **1.16×**.
<!-- /generated:perfnote -->

<!-- generated:perf -->
| Suite | jquery@3.7.1 | @itslil/jquery | Ratio |
| --- | ---: | ---: | ---: |
| core | 584.99 ms | 529.16 ms | 0.90× |
| events | 129.11 ms | 110.75 ms | 0.86× |
| deferred | 161.65 ms | 76.91 ms | 0.48× |
| collection | 9.21 ms | 8.31 ms | 0.90× |
| event-state | 15.30 ms | 15.54 ms | 1.02× |
<!-- /generated:perf -->

The deferred suite is a much cheaper implementation of the same resolve/done checksum; it is not a different workload. Absolute milliseconds move with the host; the ratio is the result.

## Names

Everything the port invented is mangled. Nothing a caller can reach is.

Identifiers are mangled whole-program, and property names are the ABI: for a drop-in, a renamed property is a broken page. `npm run check:names` audits the shipped artifact against the pinned `jquery@3.7.1` package and fails if a name the port invented survived, if the export surface is not exactly `jQuery` and `$`, or if the identifier mangler did not run.

<!-- generated:names -->
| Names in `dist/jquery.raw.js` | Count | Renameable |
| --- | ---: | --- |
| Property names, total | 446 | 15,907 emitted bytes |
| — spellings `jquery@3.7.1` also ships | 444 | no: a caller can reach them |
| — platform members (charAt, define) | 2 | no: the host owns them |
| — invented by the port | 0 | **nothing left to mangle** |
| Identifiers at one or two characters | 351 of 898 | mangled whole-program |
| ESM exports | 2 | `$`, `jQuery` |
<!-- /generated:names -->

Renaming more than this breaks the drop-in. The old LilScript compiler had an externs-style option (`[mangle] internal_properties = "all"` with `extern_fields = false`, like Closure ADVANCED) that renamed 157 further names for −552 Brotli; 156 of them are names upstream jQuery ships, the 157th is `define`, and the result threw on `import` because it renamed `document.implementation`. The current compiler has no such option, and the audit is what keeps an ABI rename from being mistaken for a size lever.

## Compiler and compile time

The site shows how long the compiler and the whole package build take, next to the original repository's own build. Both are measured on the same machine from clean outputs, three builds each, by LilScript's paired source-build worker. `comparison/source-build/` keeps the commands, samples, per-invocation compiler times and lockfiles, and `site/source-build.json` has the consolidated record. `npm run check:site` refuses to build the page if the sources, config or `dist/` no longer match that record (`scripts/build-comparison.mjs`).

<!-- generated:compiler -->
| Build | Wall time | Scope |
| --- | ---: | --- |
| LilScript compiler, one invocation | 20.71 s median | `src/entry.lil` → `dist/jquery.raw.js` |
| LilScript package | 20.80 s median (20.75 s–20.90 s; 3 builds) | `node scripts/build.mjs --compile --force` |
| Original repository | 3.17 s median (3.07 s–3.27 s; 3 builds) | `npm run build-all-variants` in jquery 3.7.1 (`f79d5f1`) |
| Original comparison ESM | 1.19 s median | esbuild bundle + Terser, recorded separately |

Measured 2026-09-24 with LilScript [`aa2052f0`](https://github.com/yeargun/lilscript/commit/aa2052f081ca8184666ca280ee9b91d476e46cfc) (binary SHA-256 `13cb49a93fb3e376a5978484835322c84adea692b69ae4720775291377cf18f9`) on Azure Standard_B8als_v2, AMD EPYC 7763 64-Core Processor, 8 vCPUs, 15.6 GiB RAM, Node v24.11.1. Runtime checks: 6/6 pass.
<!-- /generated:compiler -->

## Compatibility

- `jQuery` / `$` named exports, default export, and `window.jQuery` / `window.$` on script-tag builds
- ESM, CJS, and UMD artifacts
- `fn.jquery === "3.7.1"`
- Node / jsdom: put `window` and `document` on `globalThis` before import. Official CJS is a `factory(window)`. This package is a singleton bound at load time.
- Some `fn.length` values differ because LilScript emits rest wrappers. Call the documented arguments; do not branch on `.length`.

Zero runtime dependencies.

## Rebuild

Compiled JavaScript in `dist/` is what npm installs. Rebuilding from `src/**/*.lil` needs a release [LilScript](https://github.com/yeargun/lilscript) compiler next to this repo, or `LILSCRIPT_COMPILER`.

```sh
npm run build            # wrap the current compiler artifact
npm run build -- --compile   # compile src/entry.lil, then wrap
npm test                 # jsdom vs jquery@3.7.1
npm run check:names      # the mangling audit above
npm run examples         # http://127.0.0.1:4178/examples/
```

Refreshing the published numbers is one ordered pass. `write-results.mjs` owns
`site/results.json` and the generated tables in this file. It reads the paired
source build (`site/comparison.json`, `comparison/source-build/`), which is
re-measured whenever the sources, config or compiler change.

```sh
npm run bench            # reports/bench.json
npm run measure          # reports/sizes.json (Vite-bundles the six apps twice)
node scripts/write-results.mjs
npm run check:site
```

## License

MIT. See [NOTICE.md](./NOTICE.md).
