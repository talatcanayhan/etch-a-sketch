const body = document.querySelector("body");

//EXTRA content//
const btnExtra = document.createElement("button");
let Extra = false;
btnExtra.innerHTML = "Extra";
body.appendChild(btnExtra);
btnExtra.onclick = () => {Extra = true;};


const btn = document.createElement("button");
btn.innerHTML = "SET NEW GRID";

const gridRowColor = "brown";
const trailColor = "yellow";
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
function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return "rgb(" + r + "," + g + "," + b + ")";
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

            gridItem.onmouseover = () => {gridItem.style.backgroundColor = trailColor};
            
            if (Extra) {
            const newTrailColor = getRandomColor();
            gridItem.onmouseleave = () => {gridItem.style.backgroundColor = newTrailColor};
            }

            gridRow.appendChild(gridItem);
        }
        document.getElementById("grid-container").appendChild(gridRow);
    }
}

createGrid(16);
