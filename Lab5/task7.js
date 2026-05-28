const container = document.querySelector("#container");

let dragged = null;
let offsetX = 0;
let offsetY = 0;

for (let i = 0; i < 8; i++) {
    const sq = document.createElement("div");
    sq.className = "square";
    sq.style.left = (i * 45) + "px";
    sq.style.top = "20px";

    container.appendChild(sq);
}

container.addEventListener("mousedown", (e) => {
    const target = e.target.closest(".square");
    if (!target) return;

    dragged = target;

    const rect = dragged.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    dragged.style.zIndex = 1000;
});

document.addEventListener("mousemove", (e) => {
    if (!dragged) return;

    const containerRect = container.getBoundingClientRect();

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    x = Math.max(0, Math.min(x, container.clientWidth - dragged.clientWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - dragged.clientHeight));

    dragged.style.left = x + "px";
    dragged.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
    dragged = null;
});