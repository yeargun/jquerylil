const catalog = [
  "Deferred",
  "Callbacks",
  "Selectors",
  "Traversing",
  "Attributes",
  "Events",
  "Manipulation",
  "CSS",
  "Ajax",
  "Effects",
  "Dimensions",
  "Offset",
]

export function mount($, root) {
  const list = root.find("#results")
  $.each(catalog, (_index, name) => {
    list.append(`<li data-name="${name.toLowerCase()}"><strong>${name}</strong><span class="muted">jQuery 3.7.1</span></li>`)
  })

  const apply = () => {
    const query = $.trim(String(root.find("#q").val() ?? "")).toLowerCase()
    let visible = 0
    list.children("li").each(function () {
      const match = !query || $(this).data("name").indexOf(query) !== -1
      $(this).toggle(match)
      if (match) visible += 1
    })
    root.find("#count").text(`${visible} modules`)
  }

  root.on("input", "#q", apply)
  apply()
}
