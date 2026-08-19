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

This is the port as it stands. Official `jquery.min.js` is still smaller. Throughput against `jquery@3.7.1` is faster on every suite we ran.

## Size

Reusable package artifacts, measured with `lilscript-codec` gzip-9 / Brotli-11.

| Lane | Raw | gzip-9 | Brotli-11 | vs official min |
| --- | ---: | ---: | ---: | ---: |
| Official `jquery.js` | 285,314 | 83,619 | 69,545 | 2.53× |
| Official `jquery.min.js` | 87,533 | 30,336 | 27,445 | 1.00× |
| **`@itslil/jquery` ESM** | **92,765** | **34,544** | **30,973** | **1.13×** |

Brotli is **1.13×** official min and **0.45×** official unminified `jquery.js`. The published ESM is the LilScript compiler output plus a license banner and a default export. It is not pretty-printed and not run through Terser.

## Example app bundles

Same six apps, Vite production minify, official `jquery@3.7.1` vs `@itslil/jquery`. The number is the emitted JS chunk.

| App | jquery Brotli | @itslil/jquery Brotli | Ratio |
| --- | ---: | ---: | ---: |
| Todos | 28,847 | 30,496 | 1.06× |
| Tabs | 28,634 | 30,273 | 1.06× |
| Search | 28,737 | 30,424 | 1.06× |
| Cart | 28,877 | 30,503 | 1.06× |
| Accordion | 28,548 | 30,214 | 1.06× |
| Gallery | 28,790 | 30,421 | 1.06× |

Vite minifies both lanes. Official still wins the app chunks.

## Performance

Isolated Node v20.12.0 processes versus `jquery@3.7.1`. 8 samples, first 2 discarded, median of the rest. Ratio is `@itslil/jquery` / official (lower is faster). Checksums match on every suite. Mean retained memory **1.00×**.

| Suite | jquery@3.7.1 | @itslil/jquery | Ratio |
| --- | ---: | ---: | ---: |
| core | 224.78 ms | 212.69 ms | 0.95× |
| events | 37.63 ms | 33.55 ms | 0.89× |
| deferred | 52.46 ms | 17.77 ms | 0.34× |
| collection | 4.22 ms | 4.04 ms | 0.96× |
| event-state | 8.62 ms | 7.24 ms | 0.84× |

**5 / 5 suites ≤ 1.05×.** All five are faster. The deferred suite is a much cheaper implementation of the same resolve/done checksum; it is not a different workload.

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
npm run bench
npm run measure
npm run examples         # http://127.0.0.1:4178/examples/
```

## License

MIT. See [NOTICE.md](./NOTICE.md).
