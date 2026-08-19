import { createServer } from "node:http"
import { readFileSync, statSync } from "node:fs"
import { extname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(fileURLToPath(new URL("..", import.meta.url)))
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
}
const port = Number(process.env.PORT ?? 4178)

createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://127.0.0.1:${port}`)
  const relative = url.pathname === "/" ? "/examples/index.html" : url.pathname
  const path = resolve(root, `.${relative}`)
  if (!path.startsWith(root)) {
    response.writeHead(403)
    response.end()
    return
  }
  try {
    const stat = statSync(path)
    const file = stat.isDirectory() ? join(path, "index.html") : path
    response.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" })
    response.end(readFileSync(file))
  } catch {
    response.writeHead(404)
    response.end("not found")
  }
}).listen(port, () => {
  console.log(`http://127.0.0.1:${port}/examples/`)
})
