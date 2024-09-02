const sketchpad = document.querySelector("#sketchpad");
const gridSize = document.querySelector("p");
let input = 16
let previousInput = input;
//Display grid size
gridSize.textContent = `Current grid size: ${input} x ${input}`;
buildGrid();

//Build grid, color in and reset
function buildGrid(){
    for (let i = 0; i < input**2; i++){
        const div = document.createElement("div");
        div.style.flexBasis = `calc(100%/${input})`;
        sketchpad.appendChild(div);
    }

    //Mouseover sketchpad to color
    const squares = sketchpad.querySelectorAll("div");
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
        sketchpad.textContent = "";
        buildGrid();
    } else {
        alert("Your input is invalid. Please enter a number between 1 and 100.");
    }
    gridSize.textContent = `Current grid size: ${input} x ${input}`;
};

//Add different ink types
const menu = document.querySelector("#menu");
menu.addEventListener("click", (event) => {
    let target = event.target;
    const squares = sketchpad.querySelectorAll("div");
    switch(target.id){
        case "black":
            squares.forEach((square) => {
                square.addEventListener("mouseover", ()=> {
                    square.style.backgroundColor = "black";
                });
            });
            break;
        case "rainbow":
            squares.forEach((square) => {
                square.addEventListener("mouseover", ()=> {
                    //Randomize rgb
                    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                    const r = randomBetween(0, 255);
                    const g = randomBetween(0, 255);
                    const b = randomBetween(0, 255);
                    const rgb = `rgb(${r},${g},${b})`;
                    square.style.backgroundColor = rgb;
                });
            });
            break;
        case "gradual":  
            squares.forEach((square) => {
                let l = 100;
                square.addEventListener("mouseover", ()=> {
                    l -= 10;
                    const hsl = `hsl(0,0%,${l}%)`;
                    square.style.backgroundColor = hsl;
                });
            });
            break;
    }
});