"use strict";

let rangeSpan = document.querySelector(".range-control");
let range = document.querySelector(".range");
let span = document.createElement("span");
let gridSize;
let grid = document.querySelector(".grid-container");
let colorInput = document.querySelector(".color");
let color = "#abcdef";

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

grid.addEventListener("mousedown", (e) => {
  e.target.style.backgroundColor = color;
});