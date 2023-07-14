// Get necessary Elements
const slider = document.getElementById("myRange");
const output = document.getElementById("dimension-output");
const gridContainer = document.getElementById("grid-container");
const getColor = document.getElementById("color-selector");

// Define grid row and column
let rows = slider.value;
let columns = slider.value;
let cells;

// Generate the cells for the grid
function generateGrid() {
    // Clear existing grid
    gridContainer.innerHTML = "";

    // Set CSS custom properties
    gridContainer.style.setProperty("--columns", columns);
    gridContainer.style.setProperty("--rows", rows);

    for (let i = 0; i < rows * columns; i++) {
        const div = document.createElement("div");
        div.className = "cell";
        gridContainer.appendChild(div);
    }
    // Update the cells variable
    cells = document.querySelectorAll(".cell");
}

// Function to update grid dimensions under the slider
function updateGridDimensions() {
    rows = slider.value;
    columns = slider.value;
    output.innerHTML = `${rows} x ${columns}`;
    generateGrid();
}

// Set initial values and generate the grid
output.innerHTML = `${rows} x ${columns}`;
generateGrid();

// Add event listener to the slider
slider.addEventListener("input", updateGridDimensions);

// Add event listener to the for cells
gridContainer.addEventListener("mousedown", handleMouseDown);
gridContainer.addEventListener("mouseup", handleMouseUp);
gridContainer.addEventListener("mousemove", handleMouseMove);

let isMouseDown = false;

function handleMouseDown() {
  isMouseDown = true;
}

function handleMouseUp() {
  isMouseDown = false;
}

const colorPickerBtn = document.getElementById("colorPickerBtn");
let selectedColor = "black";

colorPickerBtn.addEventListener("click", () => {
  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
    erasing = false;
  });
  colorPicker.click();
});

// reverts all cell background color to white
function clearGrid() {
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

let erasing = false;
// when clicked
function erase() {
    erasing = true;
}

// change color of cell when mouse is dragged above it
function handleMouseMove(event) {
    const cell = event.target;
    if (isMouseDown && erasing && cell.classList.contains("cell")) {
        cell.style.backgroundColor = "white";
    } else if (isMouseDown && cell.classList.contains("cell")) {
        cell.style.backgroundColor = selectedColor;
    }
}