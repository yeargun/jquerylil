export function mount($, root) {
  root.on("click", ".section h3", function () {
    const body = $(this).next(".body")
    root.find(".body").not(body).slideUp(160)
    body.slideToggle(160)
  })
}
