# @itslil/jquery

jQuery 3.7.1 API implemented in LilScript. This independent package provides ESM, CommonJS and a browser global.

[Live comparison and examples](https://yeargun.github.io/jquerylil/) · [Checked repository package](https://yeargun.github.io/jquerylil/downloads/package.tgz) · [Package build evidence](https://yeargun.github.io/jquerylil/package-build.json)

```sh
npm install @itslil/jquery
```

```js
import {jQuery as $} from "@itslil/jquery"
$("button").on("click", function () { $(this).toggleClass("on") })
```

The repository download contains the checked build of this checkout. npm publication is independent; an npm install can resolve a different published snapshot.

## Comparison with the original

[Current raw, gzip and Brotli results and build times](COMPARISON.md) compare three independently targeted LilScript compilations with the smallest recorded original result for each codec from Terser, esbuild and Oxc. Exact bytes, configuration hashes, source inputs and commands are downloadable from the comparison page. Package formats and browser application bundles have different boundaries from the standalone comparison entries.

## Compatibility and scope

Compatibility checks cover core utilities, Deferred, selection, classes, events and public tween identity. These checks do not establish every jQuery integration.

## Rebuild and verify

Set `LILSCRIPT_COMPILER` to the current LilScript executable. Builds use one compiler job at a time.

```sh
npm ci
npm run build
npm test
npm run check:site
```

See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md) for licensing and upstream attribution.
