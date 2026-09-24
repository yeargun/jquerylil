import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { createHash } from "node:crypto"
import { existsSync, readFileSync } from "node:fs"
import { describe, it } from "node:test"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const site = resolve(root, "_site")

describe("github pages artifact", () => {
  it("ships the landing page, runtime, and examples", () => {
    for (const path of [
      "index.html",
      "styles.css",
      "app.js",
      "compiler-comparison.js",
      "results.json",
      "jquery.js",
      ".nojekyll",
      "examples/index.html",
      "examples/todos.html",
      "examples/app.css",
    ]) {
      assert.equal(existsSync(resolve(site, path)), true, path)
    }
  })

  it("does not point examples at the repo-root dist path", () => {
    const todos = readFileSync(resolve(site, "examples/todos.html"), "utf8")
    assert.match(todos, /from ["']\.\.\/jquery\.js["']/)
    assert.doesNotMatch(todos, /\/dist\/jquery/)
  })

  it("exposes the published package name and the official-min caveat", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /@itslil\/jquery/)
    assert.match(html, /official min/)
  })

  it("publishes the current ESM comparison and build facts", () => {
    const comparison = JSON.parse(readFileSync(resolve(site, "comparison.json"), "utf8"))
    assert.match(comparison.compiler.commit, /^[0-9a-f]{40}$/)
    assert.ok(comparison.esm.lilscript.brotli11 > 0)
    assert.ok(comparison.esm.original.brotli11 > 0)
    assert.ok(comparison.build.originalSeconds > 0)
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /id="build-comparison"/)
    assert.doesNotMatch(html, /id="(?:build-audit|compiler-progress)"/)
  })

  it("publishes the build time and sizes of the dist/ that ships", () => {
    const comparison = JSON.parse(readFileSync(resolve(site, "comparison.json"), "utf8"))
    const shipped = createHash("sha256").update(readFileSync(resolve(root, "dist", "jquery.esm.js"))).digest("hex")
    assert.equal(comparison.esm.lilscript.sha256, shipped, "the measured LilScript lane is the shipped ESM")
    assert.match(comparison.compiler.sha256, /^[0-9a-f]{64}$/)
    assert.equal(comparison.sourceBuild.lilscript.complete, true)
    assert.ok(comparison.build.compilerSeconds > 0 && comparison.build.packageSeconds > 0, "compile time is published")
    const results = JSON.parse(readFileSync(resolve(site, "results.json"), "utf8"))
    const lane = results.size.find((entry) => entry.primary)
    const { raw, gzip9, brotli11 } = comparison.esm.lilscript
    assert.deepEqual({ raw: lane.raw, gzip9: lane.gzip9, brotli11: lane.brotli11 }, { raw, gzip9, brotli11 })
    assert.match(readFileSync(resolve(site, "index.html"), "utf8"), /Build time from source/)
  })
})
