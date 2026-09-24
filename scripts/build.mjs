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
}

// The trailing export clause names jQuery's local binding, aliased or not.
function jqueryLocalName(source) {
  const clause = source.match(/export\s*\{([^}]*)\}\s*;?\s*$/)
  for (const entry of clause?.[1].split(",") ?? []) {
    const [local, exported = local] = entry.trim().split(/\s+as\s+/)
    if (exported === "jQuery") return local
  }
  return "e"
}

function stripNamedExport(source) {
  const next = source.replace(/;?export\s*\{[^}]+\}\s*;?\s*$/, "")
  if (next === source) {
    throw new Error("compiler artifact is missing a trailing named export")
  }
  return next
}

function withBanner(source) {
  return source.startsWith("/*!") ? source : banner + source
}

function writeEsm(raw) {
  if (!/export\s*\{/.test(raw)) {
    throw new Error("compiler artifact is missing named exports")
  }
  if (raw.includes("export default")) return withBanner(raw)
  return withBanner(`${terminate(raw)}export default ${jqueryLocalName(raw)};`)
}

function terminate(source) {
  return source.endsWith(";") ? source : `${source};`
}

function writeCjs(raw) {
  const name = jqueryLocalName(raw)
  return withBanner(
    `'use strict';${terminate(stripNamedExport(raw))}module.exports=${name};module.exports.jQuery=${name};module.exports.$=${name};module.exports.default=${name};`,
  )
}

function writeUmd(raw) {
  return withBanner(terminate(stripNamedExport(raw)))
}

compileIfRequested()
mkdirSync(dist, { recursive: true })

const rawPath = resolve(dist, "jquery.raw.js")
if (!existsSync(rawPath)) {
  throw new Error("dist/jquery.raw.js is missing. Run with --compile after building LilScript.")
}

const raw = readFileSync(rawPath, "utf8")
writeFileSync(resolve(dist, "jquery.impl.js"), raw)
writeFileSync(resolve(dist, "jquery.esm.js"), writeEsm(raw))
writeFileSync(resolve(dist, "jquery.cjs"), writeCjs(raw))
writeFileSync(resolve(dist, "jquery.umd.js"), writeUmd(raw))
copyFileSync(resolve(root, "types", "jquery.d.ts"), resolve(dist, "jquery.d.ts"))
console.log("wrote dist/jquery.esm.js, dist/jquery.cjs, dist/jquery.umd.js from compiler raw")
