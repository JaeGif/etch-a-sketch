const gridSource = document.querySelector('#grid-container')
const clearButtonSource = document.querySelector('#clear')
const aspectSliderSource = document.querySelector('#slider')
let colorChoice = document.getElementById("color-picker");

console.log((aspectSliderSource.ariaValueMax))
// make a 16x16 grid first
// biggest 8x8, smallest ratio 128x128
function setGrid(size) {
    gridSource.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridSource.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i=0; i < (size*size); i++) {
        const gridDivs = document.createElement('div')
        //gridDivs.addEventListener('mouseover', /* chage color fn */)
        //gridDivs.addEventListener('mousedown', /* chage color fn */)
        gridSource.appendChild(gridDivs)
    }
}

function sizeChange() {
    // change size of grid
}

setGrid(128)

