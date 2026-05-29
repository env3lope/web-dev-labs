class Shape {
    static total = 100;

    constructor() {
        this.a = 60;
    }

    static fill() {
        Shape.total = 100;
        updateInfo();
    }

    draw() {
        const cost = 10;

        if (Shape.total <= 0) {
            alert("Фарба закінчилась");
            return;
        }

        Shape.total -= cost;
        if (Shape.total < 0) Shape.total = 0;

        const el = document.createElement("div");
        el.classList.add("square");
        el.style.width = "60px";
        el.style.height = "60px";
        el.style.opacity = Shape.total / 100;

        document.querySelector("#canvas").appendChild(el);

        updateInfo();
    }
}

function updateInfo() {
    document.querySelector("#info").textContent =
        `Фарба: ${Shape.total.toFixed(0)}%`;
}

document.querySelector("#draw").addEventListener("click", () => {
    const shape = new Shape();
    shape.draw();
});

document.querySelector("#fill").addEventListener("click", () => {
    Shape.fill();
});

updateInfo();