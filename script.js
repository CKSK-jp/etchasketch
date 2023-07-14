// Get necessary Elements
const slider = document.getElementById("myRange");
const output = document.getElementById("dimension-output");
const gridContainer = document.getElementById("grid-container");
const cells = document.querySelectorAll(".cell");

// Define grid row and column
let rows = slider.value;
let columns = slider.value;

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

// change color of cell when mouse is dragged above it
function handleMouseMove(event) {
    const cell = event.target;
    if (isMouseDown && cell.classList.contains("cell")) {
      cell.style.backgroundColor = "black";
    }
  }