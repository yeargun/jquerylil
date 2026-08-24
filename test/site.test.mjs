import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
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

  it("publishes a frozen compiler baseline with provenance", () => {
    const results = JSON.parse(readFileSync(resolve(site, "results.json"), "utf8"))
    const comparison = results.compilerComparison
    const before = comparison.runs.find((run) => run.role === "before")
    assert.equal(comparison.schemaVersion, 1)
    assert.equal(comparison.objective, "brotli11")
    assert.deepEqual(before.artifact.sizes, { raw: 92765, gzip9: 34544, brotli11: 30973 })
    assert.match(before.source.revision, /^[0-9a-f]{40}$/)
    assert.match(before.artifact.sha256, /^[0-9a-f]{64}$/)
    assert.deepEqual(before.timing.samples, [])
    assert.match(readFileSync(resolve(site, "index.html"), "utf8"), /id="compiler-comparison"/)
    assert.match(readFileSync(resolve(root, "scripts/write-results.mjs"), "utf8"), /compilerComparison/)
    const checked = spawnSync(process.execPath, ["--check", resolve(site, "compiler-comparison.js")], { encoding: "utf8" })
    assert.equal(checked.status, 0, checked.stderr)
  })
})
