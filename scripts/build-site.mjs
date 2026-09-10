import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const output = join(root, "_site")
const examplesDest = join(output, "examples")
const pages = [
  "index.html",
  "todos.html",
  "tabs.html",
  "search.html",
  "cart.html",
  "accordion.html",
  "gallery.html",
]

await rm(output, { recursive: true, force: true })
await mkdir(join(examplesDest, "lib"), { recursive: true })
await cp(join(root, "site"), output, { recursive: true })
await cp(join(root, "dist", "jquery.esm.js"), join(output, "jquery.js"))
await cp(join(root, "examples", "app.css"), join(examplesDest, "app.css"))
for (const file of ["todos", "tabs", "search", "cart", "accordion", "gallery"]) {
  await cp(join(root, "examples", "lib", `${file}.js`), join(examplesDest, "lib", `${file}.js`))
}

for (const page of pages) {
  const source = await readFile(join(root, "examples", page), "utf8")
  await writeFile(
    join(examplesDest, page),
    source.replaceAll("/dist/jquery.esm.js", "../jquery.js"),
  )
}

await writeFile(join(output, ".nojekyll"), "")
console.log(`Built GitHub Pages site at ${output}`)

// Refuse publication if source or served artifacts drift from this measurement.
await import("./build-audit.mjs").then(({writeAudit}) => writeAudit({root, output}));
