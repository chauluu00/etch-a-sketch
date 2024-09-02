const container = document.querySelector("#container");

for (let i = 0; i < 9; i++){
    const input = 3;
    const div = document.createElement("div");
    div.style.width = container.clientWidth / input + "px";
    div.style.height = container.clientHeight / input + "px";
    container.appendChild(div);
}