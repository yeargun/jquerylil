export function mount($, root) {
  const show = (id) => {
    root.find(".tabs button").attr("aria-selected", "false")
    root.find(`.tabs button[data-tab="${id}"]`).attr("aria-selected", "true")
    root.find(".panel").removeClass("active").hide()
    root.find(`#${id}`).addClass("active").show()
  }

  root.on("click", ".tabs button", function () {
    show($(this).data("tab"))
  })
  show("read")
}
