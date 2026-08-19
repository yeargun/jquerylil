function fakeFetch($, id) {
  const deferred = $.Deferred()
  window.setTimeout(() => {
    deferred.resolve({
      id,
      title: `Plate ${id}`,
      caption: id % 2 ? "Resolved through $.Deferred" : "Same public ajax-shaped promise",
    })
  }, 180 + id * 40)
  return deferred.promise()
}

export function mount($, root) {
  const grid = root.find("#grid")
  root.find("#status").text("Loading…")
  const requests = [1, 2, 3, 4, 5, 6].map((id) => fakeFetch($, id))
  $.when(...requests).done(function (...plates) {
    const rows = $.map(plates, (plate) => {
      const item = Array.isArray(plate) ? plate[0] : plate
      return `<article class="card"><div class="photo">${item.id}</div><h3>${item.title}</h3><p class="muted">${item.caption}</p></article>`
    })
    grid.html(rows.join("")).hide().fadeIn(220)
    root.find("#status").text("6 cards via $.when")
  })
}
