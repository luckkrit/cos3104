/**
 * สร้างตาราง
 */
function ex1() {
    const data = getData()
    const table = createTable(data)
    $('#result').append(table)
}
/**
 * สร้างตารางแบบมีปุ่ม
 */
function ex2() {
    const data = getData()
    const table = createTable(data)
    const tableFoot = getTFoot()
    const newButton = $('<button/>')
    newButton.text('Add')
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}
/**
 * สร้างตารางแบบมีปุ่มกดรับ event click
 */
function ex3() {
    const data = getData()
    const table = createTable(data)
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {
        console.log('Click Add!')
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}
/**
 * click แล้วเพิ่มแถวในตาราง
 */
function ex4() {
    const data = getData()
    const table = createTable(data)
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {
        // use selector
        const tbody = $('#result > table > tbody')
        const addRow = getRow()
        const idColumn = getColumn()

        // โจทย์ ทำยังไงให้ id มันไม่ซ้ำกัน
        idColumn.text(data.length + 1)
        const nameColumn = getColumn()
        nameColumn.text(generateName())
        addRow.append(idColumn)
        addRow.append(nameColumn)
        addRow.css({ 'background-color': '#fcba03' })
        tbody.append(addRow)
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}
/**
 * click แล้วเพิ่มแถวในตาราง โดยแถวที่สร้างใหม่ ในแต่ละคอลัมน์มี input box
 */
function ex5() {
    const data = getData()
    const table = createTable(data)
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {
        // use selector
        const tbody = $('#result > table > tbody')
        const addRow = getRow()
        const idColumn = getColumn()
        const inputText = $('<input type="text" />')

        idColumn.html(inputText.clone())
        const nameColumn = getColumn()
        nameColumn.html(inputText.clone())
        addRow.append(idColumn)
        addRow.append(nameColumn)
        addRow.css({ 'background-color': '#fcba03' })
        tbody.append(addRow)
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}
/**
 * click แล้ว disable ปุ่ม
 */
function ex6() {
    const data = getData()
    const table = createTable(data)
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {
        // use selector
        const tbody = $('#result > table > tbody')
        const addRow = getRow()
        const idColumn = getColumn()
        const inputText = $('<input type="text" />')

        idColumn.html(inputText.clone())
        const nameColumn = getColumn()
        nameColumn.html(inputText.clone())
        addRow.append(idColumn)
        addRow.append(nameColumn)
        tbody.append(addRow)
        addRow.css({ 'background-color': '#fcba03' })

        // $(this) == newButton
        console.log("$(this) == newButton", $(this).is(newButton))

        $(this).attr('disabled', true)
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}

/**
 * เพิ่มปุ่ม save กับ edit
 */
function ex7() {

    const data = getData()
    const table = createTable(data)
    const trs = table.find('tr')
    trs.each(function (i, tr) {
        if (i == 0) {
            $(tr).append(getHeaderColumn())
        } else {

            const editButton = getButton('Edit', 'click', function () {
                console.log('Edit')
            })
            const editColumn = getColumn()
            editColumn.append(editButton)
            $(tr).append(editColumn)
        }
    })
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {
        // use selector
        const tbody = $('#result > table > tbody')
        const addRow = getRow()
        const idColumn = getColumn()
        const inputText = $('<input type="text" />')

        idColumn.text('*')
        const nameColumn = getColumn()
        nameColumn.html(inputText.clone())

        const saveButton = getButton('Save', 'click', function () {
            console.log('Save')
        })
        const saveColumn = getColumn()
        saveColumn.html(saveButton)


        addRow.append(idColumn)
        addRow.append(nameColumn)
        addRow.append(saveColumn)
        tbody.append(addRow)
        $(this).attr('disabled', true)
        addRow.css({ 'background-color': '#fcba03' })
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}

/**
 * เพิ่มปุ่ม cancel
 */
function ex8() {

    const data = getData()
    const table = createTable(data)
    const trs = table.find('tr')
    trs.each(function (i, tr) {
        if (i == 0) {
            $(tr).append(getHeaderColumn())
        } else {

            const editButton = getButton('Edit', 'click', function () {
                console.log('Edit')
            })
            const editColumn = getColumn()
            editColumn.append(editButton)
            $(tr).append(editColumn)
        }
    })
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {

        // use selector
        const tbody = $('#result > table > tbody')
        const addRow = getRow()
        const idColumn = getColumn()
        const inputText = $('<input type="text" />')

        idColumn.text('*')
        const nameColumn = getColumn()
        nameColumn.html(inputText.clone())

        const saveButton = getButton('Save', 'click', function () {
            console.log('Save')
        })
        const cancelButton = getButton('Cancel', 'click', function () {
            console.log('Cancel')
            newButton.removeAttr('disabled')
            addRow.remove()
        })
        const saveColumn = getColumn()
        saveColumn.append(saveButton)
        saveColumn.append(cancelButton)

        addRow.append(idColumn)
        addRow.append(nameColumn)
        addRow.append(saveColumn)
        tbody.append(addRow)
        // $(this) == newButton
        $(this).attr('disabled', true)
        console.log("$(this) == newButton", $(this).is(newButton))

        addRow.css({ 'background-color': '#fcba03' })
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}

/**
 * กด save เพิ่มข้อมูล
 */
function ex9() {

    const data = getData()
    const table = createTable(data)
    const trs = table.find('tr')
    trs.each(function (i, tr) {
        if (i == 0) {
            $(tr).append(getHeaderColumn())
        } else {

            const editButton = getButton('Edit', 'click', function () {
                console.log('Edit')
            })
            const editColumn = getColumn()
            editColumn.append(editButton)
            $(tr).append(editColumn)
        }
    })
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {

        // use selector
        const tbody = $('#result > table > tbody')
        const addRow = getRow()
        const idColumn = getColumn()
        const inputText = $('<input type="text" />')

        idColumn.text('*')
        const nameColumn = getColumn()
        nameColumn.html(inputText.clone())

        const saveButton = getButton('Save', 'click', function () {
            console.log('Save')
            const inputFullName = $(this).closest('tr').find('input')
            const fullName = inputFullName.val()
            addNewData(data, fullName)
            newButton.removeAttr('disabled')
            nameColumn.text(fullName)
            addRow.removeAttr('style')
            const editButton = getButton('Edit', 'click', function () {
                console.log('Edit')
            })
            idColumn.text(data.length)
            saveButton.remove()
            cancelButton.remove()
            saveColumn.append(editButton)
        })
        const cancelButton = getButton('Cancel', 'click', function () {
            console.log('Cancel')
            newButton.removeAttr('disabled')
            addRow.remove()
        })
        const saveColumn = getColumn()
        saveColumn.append(saveButton)
        saveColumn.append(cancelButton)

        addRow.append(idColumn)
        addRow.append(nameColumn)
        addRow.append(saveColumn)
        tbody.append(addRow)
        // $(this) == newButton
        $(this).attr('disabled', true)
        console.log("$(this) == newButton", $(this).is(newButton))

        addRow.css({ 'background-color': '#fcba03' })
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}

/**
 * validation ข้อมูลก่อน save
 */
function ex10() {

    const data = getData()
    const table = createTable(data)
    const trs = table.find('tr')
    trs.each(function (i, tr) {
        if (i == 0) {
            $(tr).append(getHeaderColumn())
        } else {

            const editButton = getButton('Edit', 'click', function () {
                console.log('Edit')
            })
            const editColumn = getColumn()
            editColumn.append(editButton)
            $(tr).append(editColumn)
        }
    })
    const tableFoot = getTFoot()
    const newButton = getButton('Add', 'click', function () {

        // use selector
        const tbody = $('#result > table > tbody')
        const addRow = getRow()
        const idColumn = getColumn()
        const inputText = $('<input type="text" />')

        idColumn.text('*')
        const nameColumn = getColumn()
        nameColumn.html(inputText.clone())

        const saveButton = getButton('Save', 'click', function () {
            console.log('Save')
            const inputFullName = $(this).closest('tr').find('input')
            const fullName = inputFullName.val()
            if (fullName.trim().length == 0) {
                nameColumn.append($('<p style="color:red">Please input full name</p>'))
                return
            }
            addNewData(data, fullName)
            newButton.removeAttr('disabled')
            nameColumn.text(fullName)
            addRow.removeAttr('style')
            const editButton = getButton('Edit', 'click', function () {
                console.log('Edit')
            })
            idColumn.text(data.length)
            saveButton.remove()
            cancelButton.remove()
            saveColumn.append(editButton)
        })
        const cancelButton = getButton('Cancel', 'click', function () {
            console.log('Cancel')
            newButton.removeAttr('disabled')
            addRow.remove()
        })
        const saveColumn = getColumn()
        saveColumn.append(saveButton)
        saveColumn.append(cancelButton)

        addRow.append(idColumn)
        addRow.append(nameColumn)
        addRow.append(saveColumn)
        tbody.append(addRow)
        // $(this) == newButton
        $(this).attr('disabled', true)
        console.log("$(this) == newButton", $(this).is(newButton))

        addRow.css({ 'background-color': '#fcba03' })
    })
    tableFoot.append(newButton)
    table.append(tableFoot)
    $('#result').append(table)
}
/**
 * โจทย์ จงทำปุ่ม edit และ cancel edit
 */
function ex11() {

}
/**
 * โจทย์ จงทำปุ่ม save edit พร้อมกับ validation
 */
function ex12() {

}
/**
 * โจทย์ จงทำปุ่ม delete
 */
function ex13() {

}