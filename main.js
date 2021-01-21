'use strict';

import { listInstance, addTolist, deleteList, delFromList } from "./src/listInstance.js";
import { createListInterface, createListBtn } from "./src/inputInterface.js";
import { snapshot, setStorageData, getStorageData, addToStorage } from "./src/localstorage.js";
import listElDrag from "./src/drag.js";

// list index counter
let counter = 1;
///////////////////////////////////
// Read data in from local storage
///////////////////////////////////
getStorageData().forEach(data => {
    createList(data)
    counter++
})
listElDrag(document.querySelectorAll('.draggable_item'), document.querySelectorAll('.list'))

/////////////////////////////////
// Create add button on interface
/////////////////////////////////
function createAddButton() {
    createListBtn()
        .addEventListener('click', () => {
            inputInterface();
            document.querySelector('.addBtn').remove()
        })
}
createAddButton();

////////////////////////////////////////////////////////////////////
// Create input interface to prompt list title + add/cancel options
// If list created / cancelled recreate add button again
///////////////////////////////////////////////////////////////////
function inputInterface() {
    createListInterface().map((btn, index) => {
        if (index === 0) {
            btn.addEventListener('click', () => {
                createList(
                    { index: counter, title: document.querySelector('.modal-input').value, items: [] }
                );
                addToStorage({ index: counter, title: document.querySelector('.modal-input').value, items: [] })
                document.querySelector('.modal').remove();
                createAddButton();
                counter++
            })
        } else {
            btn.addEventListener('click', () => {
                document.querySelector('.modal').remove();
                createAddButton();
            })
        }
    });
}

///////////////////////////////////////////////
// Create Data Snapshot when an item is dragged
///////////////////////////////////////////////
document.addEventListener('dragend', () => {
    setStorageData(snapshot())
})

///////////////////////////////////////////////
// Constructed list instance with functionality
///////////////////////////////////////////////
function createList(data) {
    listInstance(data);
    addTolist().addEventListener('click', () => {
        // Del functionality need to be added on new list elements & drag
        listElDrag(document.querySelectorAll('.draggable_item'), document.querySelectorAll('.list'))
        setStorageData(snapshot())
        delFromList().forEach(btn => {
            btn.addEventListener('click', () => {
                setStorageData(snapshot())
            })
        })
    })
    deleteList().addEventListener('click', () => {
        console.log("hii")
        setStorageData(snapshot())
    })

    // Read from local storage applies here
    delFromList().forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("hii")
            setStorageData(snapshot())
        })
    })
}