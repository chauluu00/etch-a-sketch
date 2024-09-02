const container = document.querySelector("#container");
let input = 16
buildGrid();

//Build grid, color in and reset
function buildGrid(){
    for (let i = 0; i < input**2; i++){
        const div = document.createElement("div");
        div.style.width = container.clientWidth / input + "px";
        div.style.height = container.clientHeight / input + "px";
        container.appendChild(div);
    }

    //Mouseover sketchpad to color
    const squares = container.querySelectorAll("div");
    squares.forEach((square) => {
        square.addEventListener("mouseover", ()=> {
            square.style.backgroundColor = "black";
        });
    });
     
    //Click button to erase sketchpad
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", () => {
        squares.forEach((square) => {
            square.style.backgroundColor = "";
        });
    });
}

//Click button to resize sketchpad
const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", getUserInput);

//Popup asking for the number of squares per side
function getUserInput() {
    input = prompt("Please enter the number of squares");
    if (input > 0 && input <= 100){
        container.textContent = "";
        buildGrid();
    } else {
        alert("Your input is invalid. Please enter a number between 1 and 100.");
    }
};
