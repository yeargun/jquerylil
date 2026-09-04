// Name audit: prove the shipped artifact mangles everything it is allowed to.
//
// The contract for a drop-in replacement is that every property name a caller
// could reach still reads the way jQuery spells it. Everything the port
// invented for itself is the compiler's to rename. This checks both directions
// against the pinned upstream package, so "we mangle everything except the
// public API" is a gate rather than a claim:
//
//   * every name in our artifact is one upstream jQuery also ships, or a
//     platform member on the allowlist below;
//   * the identifier stream is actually mangled;
//   * the ESM export surface is exactly `jQuery` and `$`.
//
// Run: node scripts/audit-names.mjs [--json]
import { readFileSync } from "node:fs"
import { createRequire } from "node:module"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(import.meta.url)
const upstreamDir = dirname(require.resolve("jquery/package.json"))

// Platform members the port reads off host values. They are not jQuery's, so
// they cannot come from the upstream scan, and they are not ours to rename.
const PLATFORM = ["charAt", "hasOwn", "define", "borderWidth"]

const KEYWORDS = new Set(
  "var let const function return if else for while do break continue new typeof instanceof in of this null true false undefined void delete throw try catch finally switch case default class extends super export import from as await async yield static get set".split(" "),
)

function propertyNames(source) {
  const names = new Map()
  const bump = (name) => names.set(name, (names.get(name) ?? 0) + 1)
  for (const m of source.matchAll(/\.([A-Za-z_$][\w$]*)\b/g)) bump(m[1])
  for (const m of source.matchAll(/["']([A-Za-z_$][\w$]*)["']\s*:/g)) bump(m[1])
  return names
}

function upstreamSurface() {
  const surface = new Set()
  for (const file of ["dist/jquery.js", "dist/jquery.min.js"]) {
    const source = readFileSync(join(upstreamDir, file), "utf8")
    for (const m of source.matchAll(/\.([A-Za-z_$][\w$]*)\b/g)) surface.add(m[1])
    for (const m of source.matchAll(/["']([A-Za-z_$][\w$-]*)["']/g)) surface.add(m[1])
    for (const m of source.matchAll(/([A-Za-z_$][\w$]*)\s*:/g)) surface.add(m[1])
  }
  return surface
}

export function auditNames() {
  const artifact = readFileSync(join(root, "dist", "jquery.raw.js"), "utf8")
  const ours = propertyNames(artifact)
  const upstream = upstreamSurface()
  const platform = new Set(PLATFORM)

  const leaked = [...ours.entries()]
    .filter(([name]) => !upstream.has(name) && !platform.has(name))
    .sort((left, right) => right[1] - left[1])
    .map(([name, count]) => ({ name, count }))

  // Identifier stream: everything that is not a member access. Keywords, host
  // globals and string contents ride along, so the check is on the shape of
  // the distribution, not on an exact set.
  const identifiers = new Map()
  for (const m of artifact.matchAll(/(?<![.\w$])([A-Za-z_$][\w$]*)/g)) {
    if (KEYWORDS.has(m[1])) continue
    identifiers.set(m[1], (identifiers.get(m[1]) ?? 0) + 1)
  }

  const exported = (artifact.match(/export\s*\{([^}]*)\}/)?.[1] ?? "")
    .split(",")
    .map((part) => part.split(/\s+as\s+/).pop().trim())
    .filter(Boolean)
    .sort()

  return {
    artifact: "dist/jquery.raw.js",
    upstream: `jquery@${JSON.parse(readFileSync(join(upstreamDir, "package.json"), "utf8")).version}`,
    propertyNames: ours.size,
    upstreamNames: ours.size - [...ours.keys()].filter((name) => platform.has(name)).length - leaked.length,
    platformNames: [...ours.keys()].filter((name) => platform.has(name)),
    leakedNames: leaked,
    propertyNameBytes: [...ours.entries()].reduce((sum, [name, count]) => sum + name.length * count, 0),
    distinctIdentifiers: identifiers.size,
    shortIdentifiers: [...identifiers.keys()].filter((name) => name.length <= 2).length,
    exports: exported,
  }
}

if (process.argv[1] && process.argv[1].endsWith("audit-names.mjs")) {
  const report = auditNames()
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(report, null, 2))
  } else {
    console.log(`artifact        ${report.artifact}`)
    console.log(`upstream        ${report.upstream}`)
    console.log(`property names  ${report.propertyNames} distinct, ${report.propertyNameBytes} emitted bytes`)
    console.log(`  in upstream   ${report.upstreamNames}`)
    console.log(`  platform      ${report.platformNames.length} (${report.platformNames.join(", ")})`)
    console.log(
      `  port-invented ${report.leakedNames.length}` +
        (report.leakedNames.length
          ? `: ${report.leakedNames.map((entry) => entry.name).join(", ")}`
          : " — nothing left to mangle"),
    )
    console.log(`identifiers     ${report.distinctIdentifiers} distinct, ${report.shortIdentifiers} at one or two characters`)
    console.log(`exports         ${report.exports.join(", ")}`)
  }

  const failures = []
  if (report.leakedNames.length > 0) {
    failures.push(
      `${report.leakedNames.length} port-invented property name(s) survived mangling: ${report.leakedNames.map((entry) => entry.name).join(", ")}`,
    )
  }
  if (report.exports.join(",") !== "$,jQuery") {
    failures.push(`export surface is "${report.exports.join(", ")}", expected "jQuery" and "$"`)
  }
  if (report.shortIdentifiers < 300) {
    failures.push(`only ${report.shortIdentifiers} identifiers are one or two characters; the identifier mangler did not run`)
  }
  for (const failure of failures) console.error(`FAIL ${failure}`)
  if (failures.length > 0) process.exit(1)
}
