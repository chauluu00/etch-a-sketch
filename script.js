const container = document.querySelector("#container");
//Build grid
for (let i = 0; i < 9; i++){
    const input = 3;
    const div = document.createElement("div");
    div.style.width = container.clientWidth / input + "px";
    div.style.height = container.clientHeight / input + "px";
    container.appendChild(div);
}

//Mouseover to color
const squares = container.querySelectorAll("div");
squares.forEach((square) => {
    square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = "black";
    });
});

//Reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "";
    });
});
