// assign defaults
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 8

// assign defaults to the mutable variables on page load 
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

// Page Element selection constants
const gridSource = document.querySelector('#grid-container')
const clearButtonSource = document.querySelector('#clear')
const aspectSliderSource = document.querySelector('#slider')
const resetButtonSource = document.querySelector('#reset')
// permanent listeners
aspectSliderSource.addEventListener('input', changeSize)    // listens for slider movement
clearButtonSource.addEventListener('click', () => {     // clear on click
    clearGrid()
    loadCurrent()
    })
resetButtonSource.addEventListener('click', () => {
    clearGrid()
    loadDEFAULTS()
    })

//gridSource.addEventListener('mousedown', () => {mouseDownCheck = true})

function setGrid(size) {
    gridSource.style.gridTemplateColumns = `repeat(${size}, 1fr)`       // set grid size (inline CSS)
    gridSource.style.gridTemplateRows = `repeat(${size}, 1fr)`     
    for (let i=0; i < (size*size); i++) {       // generate the grid elements based on size selection
        const gridDivs = document.createElement('div')    
        gridDivs.className = 'grid-children'        // assign class for CSS on-hover effects
        gridDivs.addEventListener('click', changeColor)     // add an on click listener to change colors
        gridSource.appendChild(gridDivs)

    }
}
function changeColor(e) {
    // select color using color swatch
    let colorChoice = document.getElementById("color-picker")
    e.target.style.backgroundColor = colorChoice.value

}
function changeSize() {
    // change size via slider
    currentSize = aspectSliderSource.value 
    clearGrid()     // clear grid for performance
    setGrid(currentSize)

}
function loadCurrent() {
    setGrid(currentSize)
    aspectSliderSource.value = currentSize
}
function loadDEFAULTS() {  // initializes the minimum page requirements
    currentSize = DEFAULT_SIZE
    setGrid(currentSize)
    aspectSliderSource.value = 8
}

function clearGrid() {      // removes element children, resets grid with current size selection
    while (gridSource.lastChild) {
        gridSource.removeChild(gridSource.lastChild);
    }
}

loadDEFAULTS()