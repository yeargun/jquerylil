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

This is the port as it stands. We are **smaller than official `jquery.min.js` on raw bytes and larger on Brotli**, and faster on every throughput suite we ran. The gap is not slack in the mangler — see [Names](#names) — it is emitted volume that compresses worse than jQuery's hand-written source.

## Size

Reusable package artifacts, measured with `lilscript-codec` gzip-9 / Brotli-11.

<!-- generated:size -->
| Lane | Raw | gzip-9 | Brotli-11 | vs official min |
| --- | ---: | ---: | ---: | ---: |
| Official `jquery.js` | 285,314 | 83,619 | 69,545 | 2.53× |
| Official `jquery.min.js` | 87,533 | 30,336 | 27,445 | 1.00× |
| **`@itslil/jquery` ESM** | **86,072** | **32,042** | **28,764** | **1.05×** |
<!-- /generated:size -->

The published ESM is the LilScript compiler output plus a license banner and a default export. It is not pretty-printed and not run through Terser. `node scripts/write-results.mjs` regenerates the three tables in this file from `reports/`, so they cannot drift from the artifact again.

## Example app bundles

Same six apps, Vite production minify, official `jquery@3.7.1` vs `@itslil/jquery`. The number is the emitted JS chunk.

<!-- generated:apps -->
| App | jquery Brotli | @itslil/jquery Brotli | Ratio |
| --- | ---: | ---: | ---: |
| Todos | 28,847 | 29,488 | 1.02× |
| Tabs | 28,634 | 29,352 | 1.03× |
| Search | 28,737 | 29,490 | 1.03× |
| Cart | 28,877 | 29,583 | 1.02× |
| Accordion | 28,548 | 29,256 | 1.02× |
| Gallery | 28,790 | 29,499 | 1.02× |
<!-- /generated:apps -->

Vite minifies both lanes. Official still wins the app chunks.

## Performance

<!-- generated:perfnote -->
Isolated Node v20.19.0 processes versus `jquery@3.7.1`. 8 samples, first 2 discarded, median of the rest. Ratio is `@itslil/jquery` / official (lower is faster). Checksums match on every suite. Mean retained memory **1.06×**.
<!-- /generated:perfnote -->

<!-- generated:perf -->
| Suite | jquery@3.7.1 | @itslil/jquery | Ratio |
| --- | ---: | ---: | ---: |
| core | 514.52 ms | 473.61 ms | 0.92× |
| events | 107.90 ms | 92.33 ms | 0.86× |
| deferred | 144.04 ms | 55.43 ms | 0.38× |
| collection | 10.80 ms | 7.99 ms | 0.74× |
| event-state | 21.17 ms | 16.14 ms | 0.76× |
<!-- /generated:perf -->

**5 / 5 suites ≤ 1.05×.** All five are faster. The deferred suite is a much cheaper implementation of the same resolve/done checksum; it is not a different workload. Absolute milliseconds move with the host; the ratio is the result.

## Names

Everything the port invented is mangled. Nothing a caller can reach is.

Identifiers are mangled whole-program, and property names are the ABI: for a drop-in, a renamed property is a broken page. `npm run check:names` audits the shipped artifact against the pinned `jquery@3.7.1` package and fails if a name the port invented survived, if the export surface is not exactly `jQuery` and `$`, or if the identifier mangler did not run.

<!-- generated:names -->
| Names in `dist/jquery.raw.js` | Count | Renameable |
| --- | ---: | --- |
| Property names, total | 476 | 16,824 emitted bytes |
| — spellings `jquery@3.7.1` also ships | 472 | no: a caller can reach them |
| — platform members (hasOwn, charAt, borderWidth, define) | 4 | no: the host owns them |
| — invented by the port | 0 | **nothing left to mangle** |
| Identifiers at one or two characters | 381 of 884 | mangled whole-program |
| ESM exports | 2 | `$`, `jQuery` |
<!-- /generated:names -->

The compiler can rename more than this. `[mangle] internal_properties = "all"` with `extern_fields = false` — LilScript's equivalent of Closure ADVANCED's externs contract — renames 157 further names for **−2,895 raw / −552 Brotli** on this port. 156 of those 157 are names upstream jQuery itself ships; the 157th is `define`, the AMD loader global. The resulting artifact does not survive `import`: it renames `document.implementation` and throws before jQuery is constructed. That option is not a size lever here, and the audit is what keeps it from being mistaken for one.

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
npm run build -- --compile
npm test                 # jsdom vs jquery@3.7.1
npm run check:names      # the mangling audit above
npm run examples         # http://127.0.0.1:4178/examples/
```

Refreshing the published numbers is one ordered pass. `write-results.mjs` owns
`site/results.json` and the three generated tables in this file; `record` adds the
run to the frozen compiler comparison the site renders, with the compiler
revision and every artifact hash computed at that moment.

```sh
npm run bench            # reports/bench.json
npm run measure          # reports/sizes.json (Vite-bundles the six apps twice)
node scripts/write-results.mjs
npm run record -- --compiler "$LILSCRIPT_COMPILER" --codec "$LILSCRIPT_CODEC"
npm run check:site
```

## License

MIT. See [NOTICE.md](./NOTICE.md).
