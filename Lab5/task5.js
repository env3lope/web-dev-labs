const palette = document.querySelectorAll(".color");
const canvas = document.querySelector("#canvas");

let selectedColor = null;

for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    cell.addEventListener("click", () => {
        if (selectedColor) {
            cell.style.background = selectedColor;
        }
    });

    canvas.appendChild(cell);
}

palette.forEach(el => {
    el.addEventListener("click", () => {
        palette.forEach(p => p.classList.remove("selected"));
        el.classList.add("selected");
        selectedColor = el.style.backgroundColor;
    });
});