import { spawnSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const worker = resolve(root, "scripts", "bench-worker.mjs")
const implementations = ["npm", "lil"]
const workloads = process.env.BENCH_WORKLOADS?.split(",") ?? [
  "core",
  "events",
  "deferred",
  "collection",
  "event-state",
]
const modes = ["performance", "memory"]
const rounds = Number(process.env.BENCH_ROUNDS ?? 8)
const warmupDiscard = 2

function median(values) {
  const sorted = [...values].sort((left, right) => left - right)
  return sorted[Math.floor(sorted.length / 2)]
}

function sample(implementation, mode, workload) {
  const result = spawnSync(
    process.execPath,
    ["--expose-gc", worker, implementation, mode, workload],
    {
      cwd: root,
      encoding: "utf8",
      maxBuffer: 16 * 1024 * 1024,
    },
  )
  if (result.status !== 0) throw new Error(result.stderr || result.stdout)
  return JSON.parse(result.stdout)
}

const report = {}
for (const workload of workloads) {
  const samples = Object.fromEntries(modes.map((mode) => [mode, { npm: [], lil: [] }]))
  for (const mode of modes) {
    for (let round = 0; round < rounds; round += 1) {
      const order = round & 1 ? [...implementations].reverse() : implementations
      for (const implementation of order) {
        samples[mode][implementation].push(sample(implementation, mode, workload))
      }
    }
    const npmChecksums = samples[mode].npm.map(({ checksum }) => checksum)
    const lilChecksums = samples[mode].lil.map(({ checksum }) => checksum)
    if (JSON.stringify(npmChecksums) !== JSON.stringify(lilChecksums)) {
      throw new Error(`${workload}/${mode} checksums differ`)
    }
  }
  const quiet = (lane) => lane.slice(warmupDiscard)
  const npmMs = median(quiet(samples.performance.npm).map(({ milliseconds }) => milliseconds))
  const lilMs = median(quiet(samples.performance.lil).map(({ milliseconds }) => milliseconds))
  const npmBytes = median(quiet(samples.memory.npm).map(({ bytes }) => bytes))
  const lilBytes = median(quiet(samples.memory.lil).map(({ bytes }) => bytes))
  report[workload] = {
    performance: { npmMs, lilMs, ratio: lilMs / npmMs },
    retainedMemory: { npmBytes, lilBytes, ratio: lilBytes / npmBytes },
  }
}

const out = {
  node: process.version,
  rounds,
  warmupDiscard,
  report,
}
mkdirSync(resolve(root, "reports"), { recursive: true })
writeFileSync(resolve(root, "reports", "bench.json"), `${JSON.stringify(out, null, 2)}\n`)
console.log(JSON.stringify(out, null, 2))
