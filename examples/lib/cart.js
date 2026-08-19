export function mount($, root) {
  const items = [
    { id: "book", name: "Printed manual", price: 18, qty: 1 },
    { id: "sticker", name: "jQuery sticker", price: 4, qty: 2 },
    { id: "mug", name: "Blue mug", price: 12, qty: 0 },
  ]

  const render = () => {
    const rows = $.map(items, (item) => {
      const line = item.price * item.qty
      return `<div class="item" data-id="${item.id}"><div><strong>${item.name}</strong><div class="muted">$${item.price}</div></div><div class="row"><input class="qty" type="number" min="0" value="${item.qty}"/><strong>$${line}</strong></div></div>`
    })
    root.find("#items").html(rows.join(""))
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
    const count = items.reduce((sum, item) => sum + item.qty, 0)
    root.find("#total").text(`$${total}`)
    root.find("#count").text(String(count))
  }

  root.on("input", ".qty", function () {
    const id = $(this).closest(".item").data("id")
    const item = items.find((entry) => entry.id === id)
    item.qty = Math.max(0, Number($(this).val()) || 0)
    render()
  })
  root.on("click", "#reset", () => {
    $.each(items, (_index, item) => {
      item.qty = item.id === "sticker" ? 2 : item.id === "book" ? 1 : 0
    })
    render()
  })
  render()
}
