// Get necessary Elements
const slider = document.getElementById("myRange");
const output = document.getElementById("dimension-output");
const gridContainer = document.getElementById("grid-container");

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