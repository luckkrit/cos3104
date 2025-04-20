import $ from 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/+esm'
const table = $('<table/>')
const thead = $('<thead/>')
const tbody = $('<tbody/>')
const tr = $('<tr/>')
const th = $('<th/>')
const td = $('<td/>')

// Arrow function
const getTHead = () => {
    return thead.clone()
}
const getTBody = () => {
    return tbody.clone()
}
const getRow = () => {
    return tr.clone()
}
const getColumn = () => {
    return td.clone()
}
const getHeaderColumn = () => {
    return th.clone()
}
const getTable = () => {
    return table.clone()
}
const createTable = (data) => {
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

export { getTHead, getTBody, getRow, getColumn, getHeaderColumn, getTable, createTable }