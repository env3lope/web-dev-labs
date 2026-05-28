const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

btn.addEventListener("mouseenter", () => {
    const boxRect = box.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxX = box.clientWidth - btnRect.width;
    const maxY = box.clientHeight - btnRect.height;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    btn.style.left = x + "px";
    btn.style.top = y + "px";
});