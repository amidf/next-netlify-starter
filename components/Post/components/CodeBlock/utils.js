export const addLineNumbers = block => {
  const codeEl = block.children.length > 0 ? block.children[0] : null

  if (!codeEl) {
    return block
  }

  const tableEl = document.createElement("table")
  tableEl.classList.add("code-block")

  Array.from(codeEl.children).forEach((line, i) => {
    const trEl = document.createElement("tr")
    const numberCell = document.createElement("td")
    const codeCell = document.createElement("td")

    numberCell.textContent = i + 1
    codeCell.append(line)
    trEl.appendChild(numberCell)
    trEl.appendChild(codeCell)

    tableEl.appendChild(trEl)
  })

  return tableEl
}
