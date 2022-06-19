const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 8

let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

const gridSource = document.querySelector('#grid-container')
const clearButtonSource = document.querySelector('#clear')
const aspectSliderSource = document.querySelector('#slider')
aspectSliderSource.addEventListener('input', changeSize)    // listens on input slide, dynamically changing
//var mouseDownCheck = false

//gridSource.addEventListener('mousedown', () => {mouseDownCheck = true})

function setGrid(size) {
    gridSource.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridSource.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i=0; i < (size*size); i++) {
        const gridDivs = document.createElement('div')
        gridDivs.addEventListener('mousedown', changeColor)
        
        gridDivs.className = 'grid-children'
        //gridDivs.addEventListener('mousedown', /* chage color fn */)
        gridSource.appendChild(gridDivs)
        //gridDivs.addEventListener('mouseover', changeColor())

    }
}

function changeColor(e) {
    let colorChoice = document.getElementById("color-picker")
    e.target.style.backgroundColor = colorChoice.value

}
function changeSize() {
    let currentSize = aspectSliderSource.value  //change size value based on slider
    clearGrid()     // clear grid for performance
    setGrid(currentSize)

}

function loadDEFAULTS() {  // initializes the minimum page requirements
    setGrid(currentSize)
    
}

function clearGrid() {      // removes element children
    while (gridSource.lastChild) {
        gridSource.removeChild(gridSource.lastChild);
    }
}

loadDEFAULTS()