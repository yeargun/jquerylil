import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
export const appIds = ["todos", "tabs", "search", "cart", "accordion", "gallery"]

export function syncApps() {
  for (const id of appIds) {
    const dir = join(root, "apps", id)
    mkdirSync(dir, { recursive: true })
    const example = readFileSync(join(root, "examples", `${id}.html`), "utf8")
    const markup = example
      .replace(/href="\.\/app\.css"/, `href="../../examples/app.css"`)
      .replace(/<script type="module">[\s\S]*?<\/script>/, "")
    writeFileSync(
      join(dir, "jquery.html"),
      markup.replace("</body>", `    <script type="module" src="./jquery.js"></script>\n  </body>`),
    )
    writeFileSync(
      join(dir, "lil.html"),
      markup.replace("</body>", `    <script type="module" src="./lil.js"></script>\n  </body>`),
    )
    writeFileSync(
      join(dir, "jquery.js"),
      `import $ from "jquery"\nimport { mount } from "../../examples/lib/${id}.js"\nmount($, $(document.getElementById("app")))\n`,
    )
    writeFileSync(
      join(dir, "lil.js"),
      `import { jQuery as $ } from "../../dist/jquery.esm.js"\nimport { mount } from "../../examples/lib/${id}.js"\nmount($, $(document.getElementById("app")))\n`,
    )
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  syncApps()
}
