import { renderCompilerComparison } from "./compiler-comparison.js"

const data = await fetch("./results.json").then((response) => {
  if (!response.ok) throw new Error(`Unable to load results: ${response.status}`)
  return response.json()
})

const formatter = new Intl.NumberFormat("en-US")

function times(value) {
  return `${value.toFixed(2)}×`
}

function ms(value) {
  return `${value.toFixed(2)} ms`
}

function renderHero() {
  const officialMin = data.size.find((lane) => lane.id === "officialMin")
  const officialDev = data.size.find((lane) => lane.id === "officialDev")
  const itslil = data.size.find((lane) => lane.primary)
  const ratio = itslil.brotli11 / officialMin.brotli11
  document.querySelector("#hero-ratio").innerHTML = `${ratio.toFixed(2)}<span>×</span>`
  document.querySelector("#hero-bytes").textContent =
    `${formatter.format(officialMin.brotli11)} B → ${formatter.format(itslil.brotli11)} B`
  document.querySelector("#hero-vs-dev").textContent = times(itslil.brotli11 / officialDev.brotli11)
  const suites = data.throughput ?? []
  document.querySelector("#hero-suites").textContent =
    suites.length ? `${suites.filter((suite) => suite.ratio <= 1.05).length}/${suites.length}` : "—"
  document.querySelector("#hero-memory").textContent = times(data.memory.retainedRatio)
}

function renderDemos() {
  const demoGrid = document.querySelector("#demo-grid")
  demoGrid.innerHTML = data.examples
    .map(
      (example, index) => `
    <article class="demo-card" style="--order:${index}">
      <header>
        <div>
          <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${example.title}</h3>
        </div>
        <strong class="saving">live</strong>
      </header>
      <div class="demo-frame-wrap">
        <iframe
          src="./examples/${encodeURIComponent(example.id)}.html"
          title="${example.title} @itslil/jquery demo"
          loading="lazy"
        ></iframe>
      </div>
      <footer>
        <span>${example.blurb}</span>
        <div>
          <a href="./examples/${encodeURIComponent(example.id)}.html">open ↗</a>
          <button class="replay" type="button" aria-label="Replay ${example.title}">replay ↻</button>
        </div>
      </footer>
    </article>
  `,
    )
    .join("")

  demoGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".replay")
    if (!button) return
    const iframe = button.closest(".demo-card").querySelector("iframe")
    iframe.src = iframe.src
  })
}

function renderSize() {
  const officialMin = data.size.find((lane) => lane.id === "officialMin")
  document.querySelector("#results-body").innerHTML = data.size
    .map(
      (lane) => `
    <tr>
      <th scope="row">${lane.name}</th>
      <td>${formatter.format(lane.raw)}</td>
      <td>${formatter.format(lane.gzip9)}</td>
      <td>${formatter.format(lane.brotli11)}</td>
      <td><strong>${(lane.brotli11 / officialMin.brotli11).toFixed(2)}×</strong></td>
    </tr>
  `,
    )
    .join("")

  const max = Math.max(...data.size.map((lane) => lane.brotli11))
  document.querySelector("#total-bar").innerHTML = data.size
    .map((lane) => {
      const width = Math.max(18, (lane.brotli11 / max) * 100)
      const cls = lane.primary ? "bar-lil" : "bar-official"
      return `<div class="${cls}" style="width:${width}%"><span>${lane.name}</span><strong>${formatter.format(lane.brotli11)} B</strong></div>`
    })
    .join("")
}

function renderApps() {
  document.querySelector("#apps-body").innerHTML = (data.apps ?? [])
    .map((app) => {
      const ratio = app.itslil.brotli11 / app.jquery.brotli11
      return `
    <tr>
      <th scope="row">${app.title}</th>
      <td>${formatter.format(app.jquery.brotli11)}</td>
      <td>${formatter.format(app.itslil.brotli11)}</td>
      <td><strong>${ratio.toFixed(2)}×</strong></td>
    </tr>`
    })
    .join("")
}

function renderNames() {
  const names = data.names
  const grid = document.querySelector("#name-grid")
  if (!names) {
    document.querySelector("#names")?.remove()
    return
  }
  const cards = [
    { value: formatter.format(names.propertyNames), label: "property names emitted" },
    { value: formatter.format(names.upstreamNames), label: `names ${names.upstream} also ships` },
    { value: String(names.platformNames.length), label: "platform members" },
    { value: String(names.leakedNames.length), label: "port-invented left", win: names.leakedNames.length === 0 },
  ]
  grid.innerHTML = cards
    .map((card) => `<div class="name-card${card.win ? " win" : ""}"><strong>${card.value}</strong><span>${card.label}</span></div>`)
    .join("")
  document.querySelector("#name-note").textContent =
    `${formatter.format(names.shortIdentifiers)} of ${formatter.format(names.distinctIdentifiers)} identifiers are one or two characters. ` +
    `The ${formatter.format(names.propertyNames)} property names weigh ${formatter.format(names.propertyNameBytes)} bytes and every one of them is reachable from a caller: ` +
    `${formatter.format(names.upstreamNames)} are spellings jQuery itself ships, ${names.platformNames.length} are platform members (${names.platformNames.join(", ")}), ` +
    `and ${names.leakedNames.length === 0 ? "none were invented by the port" : names.leakedNames.map((entry) => entry.name).join(", ") + " were invented by the port"}. ` +
    `Exports: ${names.exports.join(", ")}.`
}

function renderPerf() {
  const suites = data.throughput ?? []
  if (suites.length === 0) return
  const faster = suites.filter((suite) => suite.ratio < 1).length
  const cards = [
    {
      label: "suites ≤ 1.05×",
      value: `${suites.filter((suite) => suite.ratio <= 1.05).length}/${suites.length}`,
      geo: true,
    },
    { label: "faster than official", value: String(faster), win: true },
    { label: "worst suite", value: times(Math.max(...suites.map((suite) => suite.ratio))) },
    {
      label: "retained memory",
      value: times(data.memory.retainedRatio),
      win: data.memory.retainedRatio <= 1,
    },
  ]
  document.querySelector("#perf-cards").innerHTML = cards
    .map(
      (card) => `
    <article class="perf-card${card.win ? " win" : ""}${card.geo ? " geo" : ""}">
      <strong>${card.value}</strong>
      <span>${card.label}</span>
    </article>
  `,
    )
    .join("")
  document.querySelector("#perf-body").innerHTML = suites
    .map(
      (suite) => `
    <tr>
      <th scope="row">${suite.name}</th>
      <td>${ms(suite.officialMs)}</td>
      <td>${ms(suite.candidateMs)}</td>
      <td><strong>${times(suite.ratio)}</strong></td>
    </tr>
  `,
    )
    .join("")
  document.querySelector("#perf-note").textContent =
    `${data.node}. ${data.codec}. Quiet median after discarding the first ${data.warmupDiscard} samples.`
}

function bindCopy() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy]")
    if (!button) return
    await navigator.clipboard.writeText(button.dataset.copy)
    button.textContent = "copied"
    window.setTimeout(() => {
      button.textContent = "copy"
    }, 1200)
  })
}

function bindProgress() {
  const bar = document.querySelector(".progress")
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
  }
  window.addEventListener("scroll", update, { passive: true })
  update()
}

renderHero()
renderPerf()
renderDemos()
renderApps()
renderSize()
renderNames()
renderCompilerComparison(data)
bindCopy()
bindProgress()
