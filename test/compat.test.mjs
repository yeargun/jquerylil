import assert from "node:assert/strict"
import { createRequire } from "node:module"
import { dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { describe, it } from "node:test"
import { JSDOM } from "jsdom"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

async function load() {
  const dom = new JSDOM("<!doctype html><html><body></body></html>", { pretendToBeVisual: true })
  globalThis.window = dom.window
  globalThis.document = dom.window.document
  const officialFactory = createRequire(import.meta.url)("jquery")
  const official = officialFactory.fn?.jquery ? officialFactory : officialFactory(dom.window)
  const lil = (await import(pathToFileURL(resolve(root, "dist/jquery.esm.js")).href)).jQuery
  return { official, lil, window: dom.window, document: dom.window.document }
}

const loaded = await load()

describe("@itslil/jquery vs jquery@3.7.1", () => {
  it("exports the 3.7.1 surface", async () => {
    const { official, lil } = loaded
    assert.equal(lil.fn.jquery, "3.7.1")
    assert.equal(official.fn.jquery, "3.7.1")
    assert.equal(typeof lil, "function")
    assert.equal(typeof lil.Deferred, "function")
    assert.equal(typeof lil.ajax, "function")
  })

  it("matches core utilities", async () => {
    const { official: $u, lil: $l } = loaded
    assert.equal($l.isPlainObject({ a: 1 }), $u.isPlainObject({ a: 1 }))
    assert.equal($l.isPlainObject([]), $u.isPlainObject([]))
    assert.equal($l.isEmptyObject({}), true)
    assert.equal($l.isEmptyObject({ a: 1 }), false)
    assert.deepEqual($l.grep([1, 2, 3, 4], (n) => n % 2 === 0), $u.grep([1, 2, 3, 4], (n) => n % 2 === 0))
    assert.deepEqual($l.map([1, 2, 3], (n) => n * 2), $u.map([1, 2, 3], (n) => n * 2))
    assert.deepEqual($l.extend(true, { a: { b: 1 } }, { a: { c: 2 }, d: 3 }), $u.extend(true, { a: { b: 1 } }, { a: { c: 2 }, d: 3 }))
    assert.equal($l.inArray(2, [1, 2, 3]), 1)
  })

  it("matches Deferred resolve/reject", async () => {
    const { official: $u, lil: $l } = loaded
    const run = ($) => {
      const out = []
      const done = $.Deferred()
      done.done((value) => out.push(["done", value])).resolve(42)
      const fail = $.Deferred()
      fail.fail((value) => out.push(["fail", value])).reject("err")
      return [done.state(), fail.state(), out]
    }
    assert.deepEqual(run($l), run($u))
  })

  it("ships the compiler-selected compact ESM, not a pretty-printed wrapper", async () => {
    const { readFileSync } = await import("node:fs")
    const esm = readFileSync(resolve(root, "dist/jquery.esm.js"), "utf8")
    assert.ok(esm.split("\n").length <= 3, "ESM must stay compact compiler output")
    assert.doesNotMatch(esm, /\/\/ jquery-measured/)
    assert.match(esm, /export\{/)
    assert.match(esm, /export default /)
  })

  it("loads from CommonJS", async () => {
    const { createRequire } = await import("node:module")
    const requireCjs = createRequire(import.meta.url)
    const cjs = requireCjs(resolve(root, "dist/jquery.cjs"))
    assert.equal(cjs.fn.jquery, "3.7.1")
    assert.equal(cjs, cjs.jQuery)
    assert.equal(cjs, cjs.$)
  })

  it("selects, classes, and events", async () => {
    const { lil: $, document } = loaded
    document.body.innerHTML = `<main><button class="go" data-n="3">Go</button><p class="out"></p></main>`
    const button = $("button.go")
    assert.equal(button.length, 1)
    assert.equal(button.data("n"), 3)
    button.addClass("on")
    assert.equal(button.hasClass("on"), true)
    let clicks = 0
    button.on("click", () => {
      clicks += 1
    })
    button.trigger("click")
    assert.equal(clicks, 1)
    $("p.out").text("ok")
    assert.equal($("p.out").text(), "ok")
  })
})
