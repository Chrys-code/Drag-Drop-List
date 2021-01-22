export const listInstance = (data, drag) => {
    const wrapper = document.querySelector('.wrapper')
    var cont = document.createElement('div');
    cont.setAttribute('id', `container_${data.index}`);
    cont.setAttribute('class', `container`);
    cont.innerHTML = `
        <div class="card_${data.index}">
            <div class="header">
                <h3 id="${data.index}" class="title">${data.title}</h3>
                <button id="del-list" value="${data.index}" type="submit">X</button>
            </div>
            <div class="body">
                <div class="input_container">
                    <input type="text" id='list_${data.index}_input' placeholder="Add to list"/>
                    <button id='add-list_el' class="add-list_el" value="${data.index}" type="submit" >+</button>
                </div>
                <ul id="list_${data.index}" class='list'>
                    <!-- Draggable list content -->
                    ${createListItem(data, drag)}
                </ul>    
            </div>
        </div>
        `
    wrapper.appendChild(cont)
}

const createListItem = (data, drag) => {
    if (data.items) {
        return data.items.map(item => {
            drag
            return (
                `<div class="list_el_wrapper draggable_item" draggable="true">
                            <li id="${data.index}" class="list_el">${item}</li>
                            <button id="del-list_el" value=${item} type="submit">X</button>
                            </div>`
            )
        }).join(" ")
    }
}

export const addTolist = () => {
    const addBtns = document.querySelectorAll(`#add-list_el`);
    addBtns[addBtns.length - 1].addEventListener('click', () => {
        const ul = document.querySelector(`#list_${addBtns[addBtns.length - 1].value}`);
        const input = document.querySelector(`#list_${addBtns[addBtns.length - 1].value}_input`);
        const div = document.createElement('div');
        div.setAttribute('class', 'list_el_wrapper draggable_item')
        div.setAttribute('draggable', 'true');
        div.innerHTML = `
                <li id="${addBtns[addBtns.length - 1].value}" class="list_el">${input.value}</li>
                <button id="del-list_el" value=${input.value} type="submit">X</button>
            `
        ul.appendChild(div)
    })
    const lastBtn = addBtns[addBtns.length - 1]
    return lastBtn
}

export const delFromList = () => {
    const delBtns = document.querySelectorAll('#del-list_el');
    delBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.id === "del-list_el") {
                e.target.parentElement.remove()
            }
        })
    })
    const lastDelListBtn = delBtns[delBtns.length - 1]
    return lastDelListBtn
}

export const deleteList = () => {
    const delBtns = document.querySelectorAll(`#del-list`);
    delBtns[delBtns.length - 1].addEventListener('click', () => {
        delBtns[delBtns.length - 1].parentElement.parentElement.parentElement.remove()
    })
    const delListBtn = delBtns[delBtns.length - 1]
    return delListBtn
}

