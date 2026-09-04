// Record the current compiler run as the `current` role of the frozen
// comparison the Pages site renders. The `before` run is a published artifact
// and is never touched; this only ever replaces the `current` entry, so the
// page keeps showing what changed and against what.
//
//   node scripts/record-compiler-run.mjs --label "..." [--compiler <path>]
//
// Provenance is computed, not asserted: every hash is of a file on disk at the
// moment of the run.
import { createHash } from "node:crypto"
import { execFileSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const argv = process.argv.slice(2)
const flag = (name, fallback = null) => {
  const at = argv.indexOf(`--${name}`)
  return at === -1 ? fallback : argv[at + 1]
}

const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex")
const git = (cwd, ...args) => {
  try {
    return execFileSync("git", args, { cwd, encoding: "utf8" }).trim()
  } catch {
    return null
  }
}

const compiler = flag("compiler", process.env.LILSCRIPT_COMPILER)
const compilerRoot = flag("compiler-root", process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript"))
const codec = flag("codec", process.env.LILSCRIPT_CODEC)

const semantic = (() => {
  const command = "npm test && npm run check:names"
  try {
    const compat = execFileSync("npm", ["test"], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] })
    const names = execFileSync("npm", ["run", "check:names"], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] })
    const passed = compat.match(/# pass (\d+)/)?.[1] ?? "?"
    const invented = names.match(/port-invented (\d+)/)?.[1] ?? "?"
    return {
      status: "passed",
      command,
      summary: `${passed} of ${passed} compatibility tests passed; ${invented} port-invented property names left unmangled`,
    }
  } catch (error) {
    return { status: "failed", command, summary: String(error.message).slice(0, 200) }
  }
})()

const resultsPath = resolve(root, "site", "results.json")
const results = JSON.parse(readFileSync(resultsPath, "utf8"))
const sizes = results.size.find((lane) => lane.primary)

const run = {
  id: "current-verified",
  role: "current",
  label: flag("label", "Current compiler-selected ESM"),
  recordedAt: new Date().toISOString(),
  source: {
    revision: git(root, "rev-parse", "HEAD"),
    tree: git(root, "rev-parse", "HEAD^{tree}"),
    entrySha256: sha256(resolve(root, "src", "entry.lil")),
    packageLockSha256: sha256(resolve(root, "package-lock.json")),
  },
  config: {
    path: "lilscript.toml",
    sha256: sha256(resolve(root, "lilscript.toml")),
    derivation: { kind: "identity" },
  },
  compiler: {
    revision: git(compilerRoot, "rev-parse", "HEAD"),
    binarySha256: compiler ? sha256(compiler) : null,
  },
  codec: {
    binarySha256: codec ? sha256(codec) : null,
    gzipLevel: 9,
    brotliQuality: 11,
  },
  artifact: {
    path: "dist/jquery.esm.js",
    sha256: sha256(resolve(root, "dist", "jquery.esm.js")),
    sizes: { raw: sizes.raw, gzip9: sizes.gzip9, brotli11: sizes.brotli11 },
  },
  timing: { scope: "compile", samples: [], unavailableReason: "compiled on the build pool; wall clock is not a result" },
  semantic,
}

const comparison = results.compilerComparison
comparison.runs = [...comparison.runs.filter((entry) => entry.role !== "current"), run]
writeFileSync(resultsPath, `${JSON.stringify(results, null, 2)}\n`)
console.log(`recorded compiler run: ${run.artifact.sizes.brotli11} B Brotli-11, ${semantic.status} (${semantic.summary})`)
