export function getStorageData() {
    return JSON.parse(localStorage.getItem('draglist')) || [];
}
export function setStorageData(obj) {
    localStorage.setItem('draglist', JSON.stringify(obj));
}
export function addToStorage(snapshot) {
    setStorageData([...getStorageData(), snapshot]);
}
export function snapshot() {
    const listTitles = document.querySelectorAll('.title');
    let list = []
    let index = 1;
    listTitles.forEach(title => {
        const listItems = document.querySelectorAll('.list_el');
        let obj = {
            index: index,
            title: title.textContent,
            items: []
        }
        listItems.forEach(listItem => {
            if (listItem.id !== title.id) return
            obj.items.push(listItem.textContent)
        })
        list.push(obj)
        index++
    })
    console.log(list)
    return list
}

