import assert from "node:assert/strict"
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
})
