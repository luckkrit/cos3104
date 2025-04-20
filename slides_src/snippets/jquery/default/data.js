function getData() {
    const data = []
    for (let i = 0; i < 10; i++) {
        const name = generateName();
        data.push({ id: i + 1, name })
    }
    return data
}

function addNewData(data, fullName) {
    data.push({ id: data.length + 1, name: fullName })
}