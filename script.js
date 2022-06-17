const DEFAULT_COLOR = '#000000'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 8

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


const gridSource = document.querySelector('#grid-container')
const clearButtonSource = document.querySelector('#clear')
const aspectSliderSource = document.querySelector('#slider')
let colorChoice = document.getElementById("color-picker");


// biggest 8x8, smallest ratio 128x128

/* function changeColor(e) {
    e.style.backgroundColor('black')
} */
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
    e.target.style.backgroundColor = '#FF0000'
    console.log(e.target.className)
}
function sizeChange() {
    // change size of grid
}


setGrid(8)

