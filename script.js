"use strict";

let rangeSpan = document.querySelector(".range-control");
let range = document.querySelector(".range");
let span = document.createElement("span");
let gridSize;
let grid = document.querySelector(".grid-container");
let colorInput = document.querySelector(".color");
let color = "#abcdef";
let gridLineCheckbox = document.querySelector(".grid-line-checkbox");
let randomColorButton = document.querySelector(".suprise-me");
hexaToDeci(color);
init();

function init() {
  gridSize = range.value;
  color = colorInput.value;
  span.textContent = gridSize;
  rangeSpan.appendChild(span);
}
range.addEventListener("change", (e) => {
  span.textContent = e.target.value;
  gridSize = e.target.value;
  grid.innerHTML = "";
  generateGrid(gridSize);
});

function hexaToDeci(...colors) {
  if (colors.length == 1) {
    const hex = colors[0];
    let red = parseInt(hex.slice(1, 3), 16);

    let green = parseInt(hex.slice(3, 5), 16);
    let blue = parseInt(hex.slice(5, 7), 16);
    console.log(`rgb(${red},${green},${blue})`);
  }
}

function DeciToHex(...colors){
    
    return colors.map(el => el.toString(16).padStart(2, '0'));
}
colorInput.addEventListener("change", (e) => {
  color = e.target.value;
});

function generateGrid(size) {
  let minWidth = 400 / size;
  console.log(minWidth);
  for (let i = 1; i <= size ** 2; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.style.minWidth = minWidth + "px";
    grid.appendChild(div);
  }
}

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

randomColorButton.addEventListener("click", () => {
    let red = random(0,255);
    let green = random(0,255);
    let blue = random(0,255);
    color = `rgb(${red},${green},${blue})`
    let hex = DeciToHex(red, green, blue);
    console.log(hex);
    colorInput.value = `#${hex[0]}${hex[1]}${hex[2]}`;
})

grid.addEventListener("mousemove", (e) => {
  e.target.style.backgroundColor = color;
});

console.log(gridLineCheckbox.value)
gridLineCheckbox.addEventListener("change", (e) => {
    if(e.target.checked){
        for (let el of grid.children){
            el.classList.add("canvas-grid-lines");
        }
    }else{
        for (let el of grid.children){
            el.classList.remove("canvas-grid-lines");
        }
    }
    
})