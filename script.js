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
const gridSizeUpdater = document.querySelector('p')

// permanent listeners
aspectSliderSource.addEventListener('input', () => {
    let value = aspectSliderSource.value
    changeSize()
    gridSizeUpdater.textContent = ''
    gridSizeUpdater.textContent = `Grid Size: ${value} x ${value}`
})
clearButtonSource.addEventListener('click', () => {     // clear on click
    clearGrid()
    loadCurrent()
})
resetButtonSource.addEventListener('click', () => {     // reset to defaults
    clearGrid()
    loadDEFAULTS()
})
penButtonSource.addEventListener('click', () => {       // pen mode button
    currentMode = 'pen'
    clearGrid()
    loadCurrent()
})
rainbowButtonSource.addEventListener('click', () => {       // rainbow mode button
    currentMode = 'rainbow'
    clearGrid()
    loadCurrent()
})
preciseButtonSource.addEventListener('click', () => {       // precision mode button
    currentMode = 'precise'
    clearGrid()
    loadCurrent()
})
charcoalButtonSource.addEventListener('click', () => {      // charcoal mode button
    currentMode = 'charcoal'
    clearGrid()
    loadCurrent()
})
// essential functions
function setGrid(size) {
    gridSource.style.gridTemplateColumns = `repeat(${size}, 1fr)`       // set grid size (inline CSS)
    gridSource.style.gridTemplateRows = `repeat(${size}, 1fr)`     
    for (let i=0; i < (size*size); i++) {       // generate the grid elements based on size selection
        const gridDivs = document.createElement('div')    
        gridDivs.className = 'grid-children'        // assign class for CSS on-hover effects
        checkMode(gridDivs, i)     // add an on click listener to change colors
        gridSource.appendChild(gridDivs)
    }
}
function checkMode(gridE, i) {
    if (currentMode == 'precise') {
        gridE.addEventListener('click', changeColor);
    } else if (currentMode == 'pen') {
        gridE.addEventListener('mouseover', changeColor)
    } else if (currentMode == 'rainbow') {
        gridE.addEventListener('mouseover', changeColor)
    } else if (currentMode == 'charcoal') {
        gridE.id = [i, 0]
        gridE.addEventListener('click', changeColor)
    } else {
        alert('Something has gone horribly wrong, please reload the page')
    }
}
function changeColor(e) {
    // select color using color swatch
    colorChoice = document.getElementById("color-picker")
    let color = colorChoice.value
    if (currentMode == 'rainbow') {
        let rR = Math.floor(Math.random() * 255)
        let rG = Math.floor(Math.random() * 255)
        let rB = Math.floor(Math.random() * 255)
        color = `rgb(${rR}, ${rG}, ${rB})`
    } else if (currentMode == 'charcoal') {
        var arrayDarkness = e.target.id.split(',')
        if (Number(arrayDarkness[1]) < 14) {            
            arrayDarkness[1] = Number(arrayDarkness[1]) + 1
            e.target.id = arrayDarkness
            let darkness = 26 - (26 * (arrayDarkness[1]/15))
            color = `hsl(204, 19%, ${darkness}%)`
        } else {
            color = 'hsl(204, 19%, 0%)'
        }
    }
    e.target.style.backgroundColor = color
}
function changeSize() {
    // change size via slider
    currentSize = aspectSliderSource.value 
    clearGrid()             // clear grid for performance
    setGrid(currentSize)
}
function loadCurrent() {        // reload grid with current settings
    setGrid(currentSize)
    aspectSliderSource.value = currentSize
}
function loadDEFAULTS() {  // initializes the minimum page requirements
    currentSize = DEFAULT_SIZE      // changes the variables to defaults
    currentChoice = DEFAULT_COLOR
    currentMode = DEFAULT_MODE
    aspectSliderSource.value = 8
    setGrid(currentSize)
}
function clearGrid() {      // kills element children, resets grid with current size selection
    while (gridSource.lastChild) {
        gridSource.removeChild(gridSource.lastChild);
    }
}
// on page load initialize default grid
loadDEFAULTS()
