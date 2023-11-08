const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "grid-container");
document.querySelector("body").appendChild(gridContainer);



for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "grid-row-${i+1}");
    gridRow.style.display = "flex";

    for (let j =0; j < 16; j++) {
        const gridItem = document.createElement("div");
        gridItem.setAttribute("class", "grid-item");

        //Set CSS style attributes for grid items// 
        gridItem.style.height = "25px";
        gridItem.style.width = "25px";
        gridItem.style.border = "solid";
        gridItem.onmouseover = () => {gridItem.style.backgroundColor = "yellow"};
        gridItem.onmouseleave = () => {gridItem.style.backgroundColor = "white"};

        

        gridRow.appendChild(gridItem);
    }

    gridContainer.appendChild(gridRow);
}