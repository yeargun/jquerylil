export function mount($, root) {
  const state = [
    { title: "Port jQuery", done: true },
    { title: "Keep selectors honest", done: false },
  ]

  const render = () => {
    const remaining = state.filter((item) => !item.done).length
    const items = state
      .map(
        (item, index) =>
          `<li><label><input type="checkbox" data-index="${index}"${item.done ? " checked" : ""}/> <span class="${item.done ? "done" : ""}">${item.title}</span></label></li>`,
      )
      .join("")
    root.find("#list").html(items)
    root.find("#remaining").text(String(remaining))
  }

  root.on("submit", "#form", (event) => {
    event.preventDefault()
    const input = root.find("#title")
    const title = $.trim(String(input.val() ?? ""))
    if (!title) return
    state.push({ title, done: false })
    input.val("")
    render()
  })
  root.on("change", "input[type=checkbox]", function () {
    const index = Number($(this).data("index"))
    state[index].done = this.checked
    render()
  })
  root.on("click", "#complete", () => {
    $.each(state, (_index, item) => {
      item.done = true
    })
    render()
  })
  root.on("click", "#clear", () => {
    const kept = $.grep(state, (item) => !item.done)
    state.length = 0
    $.merge(state, kept)
    render()
  })
  render()
}
