export const createListInterface = () => {
    const window = document.querySelector(".wrapper");

    var div = document.createElement('div');
    div.setAttribute('class', 'modal');

    var input = document.createElement('input');
    input.setAttribute('class', 'modal-input');
    input.placeholder = `List Title`

    var addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'modal-btn');
    addBtn.innerText = `ADD`;

    var closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'modal-close');
    closeBtn.innerText = `X`;

    window.appendChild(div)
    div.appendChild(input)
    div.appendChild(addBtn)
    div.appendChild(closeBtn)

    return [addBtn, closeBtn]
}

export const createListBtn = () => {
    const window = document.querySelector(".wrapper");
    var btn = document.createElement('button');
    btn.setAttribute('class', 'addBtn')
    btn.innerText = `+`
    window.appendChild(btn)

    return btn
}
