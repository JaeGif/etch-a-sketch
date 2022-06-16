const gridSource = document.querySelector('#grid-container')
const clearButtonSource = document.querySelector('#clear')
const aspectSliderSource = document.querySelector('#slider')
let gridDivs = document.createElement('div')
let colorChoice = document.getElementById("color-picker");

// make a 16x16 grid first
// biggest 8x8, smallest ratio 128x128

for (let i=0; i <16; i++){
    gridSource.appendChild(gridDivs)
}