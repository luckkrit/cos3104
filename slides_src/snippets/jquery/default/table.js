const table = $('<table/>')
const thead = $('<thead/>')
const tbody = $('<tbody/>')
const tfoot = $('<tfoot/>')
const tr = $('<tr/>')
const th = $('<th/>')
const td = $('<td/>')

function getTHead() {
    return thead.clone()
}
function getTBody() {
    return tbody.clone()
}
function getTFoot() {
    return tfoot.clone()
}
function getRow() {
    return tr.clone()
}
function getColumn() {
    return td.clone()
}
function getHeaderColumn() {
    return th.clone()
}
function getTable() {
    return table.clone()
}
function getButton(text, eventName = undefined, handler = undefined) {

    const cloneButton = $('<button/>')
    cloneButton.text(text)
    if (eventName && handler) {
        cloneButton.on(eventName, handler)
    }
    return cloneButton
}
function createTable(data) {
    const tableClone = getTable()
    const tableHead = getTHead()
    const tableBody = getTBody()
    for (const [id, item] of data.entries()) {
        const row = getRow()
        if (id == 0) {

            const rowHeader = getRow()
            for (const [key, _] of Object.entries(item)) {
                const columnHeader = getHeaderColumn()
                columnHeader.text(key)
                rowHeader.append(columnHeader)
            }
            tableHead.append(rowHeader)
        }
        for (const [_, value] of Object.entries(item)) {
            const column = getColumn()
            column.text(value)
            row.append(column)
        }
        tableBody.append(row)
        tableClone.append(tableHead)
        tableClone.append(tableBody)
    }
    return tableClone
}