import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build as viteBuild } from "vite"
import { measureFile } from "./codec.mjs"
import { appIds, syncApps } from "./sync-apps.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
syncApps()
const apps = appIds

async function buildApp(id, lane) {
  const outDir = join(root, ".tmp", "apps", `${id}-${lane}`)
  rmSync(outDir, { recursive: true, force: true })
  await viteBuild({
    root: join(root, "apps", id),
    base: "./",
    configFile: false,
    logLevel: "silent",
    build: {
      outDir,
      emptyOutDir: true,
      minify: true,
      modulePreload: { polyfill: false },
      rollupOptions: {
        input: join(root, "apps", id, `${lane}.html`),
      },
    },
  })
  const { readdirSync } = await import("node:fs")
  const assets = readdirSync(join(outDir, "assets")).filter((name) => name.endsWith(".js"))
  if (assets.length !== 1) throw new Error(`${id}/${lane} expected one JS chunk, got ${assets}`)
  return measureFile(join(outDir, "assets", assets[0]))
}

const library = {
  officialDev: measureFile(join(root, "node_modules/jquery/dist/jquery.js")),
  officialMin: measureFile(join(root, "node_modules/jquery/dist/jquery.min.js")),
  itslil: measureFile(join(root, "dist/jquery.esm.js")),
}

const appSizes = {}
for (const id of apps) {
  appSizes[id] = {
    jquery: await buildApp(id, "jquery"),
    itslil: await buildApp(id, "lil"),
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  node: process.version,
  codec: "lilscript-codec gzip-9 / brotli-11",
  library,
  apps: appSizes,
}

mkdirSync(join(root, "reports"), { recursive: true })
writeFileSync(join(root, "reports", "sizes.json"), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report, null, 2))
