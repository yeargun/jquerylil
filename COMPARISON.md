# Current comparison with the original

Browser jQuery singleton exposing the same default, jQuery and $ entry names. The comparison includes the complete main entry; API compatibility is limited to the recorded checks.

Each compression row uses a separate LilScript compilation targeting that objective. Original results are the smallest of Terser, esbuild and Oxc for the named codec.

| Objective | LilScript bytes | Original minified bytes | Original minifier | LilScript build (s) | Original bundle + minify (s) |
|---|---:|---:|---|---:|---:|
| raw | 73,493 | 87,344 | Oxc | 81.130 | 0.221 |
| gzip | 28,626 | 30,458 | Terser | 70.991 | 2.099 |
| brotli | 25,873 | 27,631 | Terser | 170.311 | 2.099 |

Original version: `jquery@3.7.1`. gzip level 9; Brotli quality 11/window 22. Each time is one sequential fresh-output build on the recorded shared machine. Original timing starts from installed ESM and does not include the original repository’s TypeScript compilation. Dependency installation, tests and final file compression are excluded.

Validation: 21 checks across raw, gzip and Brotli main entries. This does not cover every package format or establish complete upstream API equivalence.

[Artifacts, hashes and settings](site/comparison.json) · [Commands, source identities and timings](site/comparison-builds.json) · [Exact checked source inputs](site/comparison-artifacts/sources.tar.gz).
