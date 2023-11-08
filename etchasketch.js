const body = document.querySelector("body");

const btn = document.createElement("button");
const gridRowColor = "brown";

btn.innerHTML = "SET NEW GRID";
btn.onclick = () => {
    const newPixelNum = window.prompt("Enter the number of pixels");
    createGrid(newPixelNum);
};
body.appendChild(btn);

function createGridContainer() {
    const gridContainer = document.createElement("div");
    gridContainer.style.width = "500px";
    gridContainer.style.height = "500px";
    gridContainer.style.backgroundColor = "blue";
    gridContainer.setAttribute("id", "grid-container");
    body.appendChild(gridContainer);
    return gridContainer;
}
function clearBody() {
    const removed = document.getElementById("grid-container");
    if (removed != null)
        removed.remove();
}

function createGrid(pixelNum) {
    clearBody();
    createGridContainer();

    for (let i = 0; i < pixelNum; i++) {
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row-${i+1}");

        gridRow.style.backgroundColor = gridRowColor;
        gridRow.style.display = "flex";

        for (let j = 0; j < pixelNum; j++) {
            const gridItem = document.createElement("div");
            gridItem.setAttribute("class", "grid-item");
            //Set CSS style attributes for grid items// 
            gridItem.style.width = (500 / pixelNum) + "px";
            gridItem.style.height = (500 / pixelNum) + "px";
            gridItem.style.border = "solid";
            gridItem.style.borderWidth = "1px";
            gridItem.onmouseover = () => {gridItem.style.backgroundColor = "yellow"};
            //gridItem.onmouseleave = () => {gridItem.style.backgroundColor = gridRowColor};

            gridRow.appendChild(gridItem);
        }
        document.getElementById("grid-container").appendChild(gridRow);
    }
}

createGrid(16);