import {
  accessSync,
  constants,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript")
const dist = resolve(root, "dist")
const banner =
  "/*! @itslil/jquery 3.7.1 | LilScript reimplementation of jQuery 3.7.1 | MIT */\n"

function compilerPath() {
  const candidates = [
    process.env.LILSCRIPT_COMPILER,
    resolve(lilscriptRoot, "target", "release", "lilscript"),
    resolve(lilscriptRoot, "target", "debug", "lilscript"),
  ].filter(Boolean)
  for (const candidate of candidates) {
    try {
      accessSync(candidate, constants.X_OK)
      return candidate
    } catch {
      // try next
    }
  }
  return null
}

function run(cmd, args) {
  const result = spawnSync(cmd, args, { cwd: root, stdio: "inherit" })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

function compileIfRequested() {
  if (!process.argv.includes("--compile")) return
  const compiler = compilerPath()
  if (!compiler) {
    throw new Error("LilScript compiler not found. Set LILSCRIPT_COMPILER or build lilscript.")
  }
  mkdirSync(dist, { recursive: true })
  const raw = resolve(dist, "jquery.raw.js")
  run(compiler, [
    resolve(root, "src", "entry.lil"),
    "--target",
    "js-module",
    "--config",
    resolve(root, "lilscript.toml"),
    "-o",
    raw,
  ])
  const esbuild = resolve(root, "node_modules", ".bin", "esbuild")
  run(esbuild, [
    raw,
    "--bundle",
    "--format=esm",
    "--platform=neutral",
    `--outfile=${resolve(dist, "jquery.impl.js")}`,
    "--log-level=error",
  ])
}

function jqueryLocalName(impl) {
  const match = impl.match(/(\w+)\s+as\s+jQuery/)
  return match?.[1] ?? "e"
}

function writeEsm(impl) {
  if (!impl.includes("export {")) {
    throw new Error("compiler artifact is missing named exports")
  }
  if (impl.includes("export default")) return impl
  return `${impl}\nexport default ${jqueryLocalName(impl)};\n`
}

function writeUmd(impl) {
  return `${banner}(function () {\n${impl.replace(/\nexport \{[\s\S]*$/, "\n")}\n})();\n`
}

compileIfRequested()
mkdirSync(dist, { recursive: true })

const implPath = resolve(dist, "jquery.impl.js")
if (!existsSync(implPath)) {
  throw new Error("dist/jquery.impl.js is missing. Run with --compile after building LilScript.")
}

const impl = readFileSync(implPath, "utf8")
const esm = writeEsm(impl.startsWith("/*!") ? impl : banner + impl)
writeFileSync(resolve(dist, "jquery.esm.js"), esm)
writeFileSync(resolve(dist, "jquery.umd.js"), writeUmd(impl))

const esbuild = resolve(root, "node_modules", ".bin", "esbuild")
run(esbuild, [
  resolve(dist, "jquery.esm.js"),
  "--bundle",
  "--format=cjs",
  "--platform=neutral",
  `--banner:js=${JSON.stringify(banner.trim())}`,
  `--outfile=${resolve(dist, "jquery.cjs.bundle.js")}`,
  "--log-level=error",
])
writeFileSync(
  resolve(dist, "jquery.cjs"),
  `${banner}'use strict';\nconst mod = require('./jquery.cjs.bundle.js');\nconst jq = mod.jQuery || mod.default;\nmodule.exports = jq;\nmodule.exports.jQuery = jq;\nmodule.exports.$ = jq;\nmodule.exports.default = jq;\n`,
)

copyFileSync(resolve(root, "types", "jquery.d.ts"), resolve(dist, "jquery.d.ts"))
console.log("wrote dist/jquery.esm.js, dist/jquery.cjs, dist/jquery.umd.js")
