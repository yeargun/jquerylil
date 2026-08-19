export const pages = [
  ["index.html", "Examples"],
  ["todos.html", "Todos"],
  ["tabs.html", "Tabs"],
  ["search.html", "Search"],
  ["cart.html", "Cart"],
  ["accordion.html", "Accordion"],
  ["gallery.html", "Gallery"],
]

export function navHtml(current) {
  return pages
    .map(([href, label]) => {
      const currentAttr = href === current ? ' aria-current="page"' : ""
      return `<a href="./${href}"${currentAttr}>${label}</a>`
    })
    .join("")
}
