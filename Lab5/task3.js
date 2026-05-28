const colors = document.querySelectorAll(".color");
const rect = document.querySelector("#rect");

let selectedColors = [];

function updateRect() {
    if (selectedColors.length === 0) {
        rect.style.background = "white";
        return;
    }

    if (selectedColors.length === 1) {
        rect.style.background = selectedColors[0];
        return;
    }

    rect.style.background = `linear-gradient(to bottom, ${selectedColors.join(", ")})`;
}

colors.forEach(el => {
    el.addEventListener("click", () => {
        const color = el.style.backgroundColor;
        if (el.classList.contains("selected")) {
            el.classList.remove("selected");
            selectedColors = selectedColors.filter(c => c !== color);
        } else {
            el.classList.add("selected");
            selectedColors.push(color);
        }
        updateRect();
    });
});