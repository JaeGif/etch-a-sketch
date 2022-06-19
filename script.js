// assign defaults
const DEFAULT_SIZE = 8
const DEFAULT_COLOR = '#000000'
const DEFAULT_MODE = 'precise'
// assign defaults to the mutable variables on page load 
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE
let currentChoice = DEFAULT_COLOR

// Page Element selection constants
const gridSource = document.querySelector('#grid-container')
const clearButtonSource = document.querySelector('#clear')
const aspectSliderSource = document.querySelector('#slider')
const resetButtonSource = document.querySelector('#reset')
const penButtonSource = document.querySelector('#pen-color')
const rainbowButtonSource = document.querySelector('#rainbow-color')
const charcoalButtonSource = document.querySelector('#charcoal-mode')
const preciseButtonSource = document.querySelector('#click-color')
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

penButtonSource.addEventListener('click', () => {
    currentMode = 'pen'
    clearGrid()
    loadCurrent()
})
rainbowButtonSource.addEventListener('click', () => {
    currentMode = 'rainbow'
    clearGrid()
    loadCurrent()
})
preciseButtonSource.addEventListener('click', () => {
    currentMode = 'precise'
    clearGrid()
    loadCurrent()
})
//gridSource.addEventListener('mousedown', () => {mouseDownCheck = true})

function setGrid(size) {
    gridSource.style.gridTemplateColumns = `repeat(${size}, 1fr)`       // set grid size (inline CSS)
    gridSource.style.gridTemplateRows = `repeat(${size}, 1fr)`     
    for (let i=0; i < (size*size); i++) {       // generate the grid elements based on size selection
        const gridDivs = document.createElement('div')    
        gridDivs.className = 'grid-children'        // assign class for CSS on-hover effects
        changeMode(gridDivs)     // add an on click listener to change colors
        gridSource.appendChild(gridDivs)

    }
}
function changeMode(gridE) {
    if (currentMode == 'precise') {
        preciseMode(gridE);
    } else if (currentMode == 'pen') {
        penMode(gridE)
    } else if (currentMode == 'rainbow') {
        rainbowMode(gridE)
    } /* else if (currentMode == 'charcoal') {
        charcoalMode(gridE, eleIndex)
    } */ else {
        alert('Something has gone horribly wrong, please reload the page')
    }
}
function preciseMode(preciseElements) {
    preciseElements.addEventListener('click', changeColor)
}
function penMode(penElements) {
    // change color on mouse down until mouse down false
    penElements.addEventListener('mouseover', changeColor)
}
function rainbowMode(rainbowElements) {
    // pen mode, change color randomly
    rainbowElements.addEventListener('mouseover', changeColor)
}
/* function charcoalMode(charcoalElements, i) {
    // pen mode make color a 10% darker on subsequent passes over an element
    let clicks = 0
    let gridArray = []
    charcoalElements.addEventListener('click', () => {
        let lightness = 26 + (clicks * (1/10))
        colorChoice = `hsl(204, 19%, ${lightness}%)`
    })
} */
function changeColor(e) {
    // select color using color swatch
    colorChoice = document.getElementById("color-picker")
    let color = colorChoice.value
    if (currentMode == 'rainbow') {
        let rR = Math.floor(Math.random() * 255)
        let rG = Math.floor(Math.random() * 255)
        let rB = Math.floor(Math.random() * 255)
        color = `rgb(${rR}, ${rG}, ${rB})`
    }
    e.target.style.backgroundColor = color

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
    currentChoice = DEFAULT_COLOR
    currentMode = DEFAULT_MODE
    setGrid(currentSize)
    aspectSliderSource.value = 8
}

function clearGrid() {      // removes element children, resets grid with current size selection
    while (gridSource.lastChild) {
        gridSource.removeChild(gridSource.lastChild);
    }
}

loadDEFAULTS()
