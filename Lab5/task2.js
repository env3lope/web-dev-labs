const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
    result.innerHTML = "";
    const lines = document.querySelector("#input").value.trim().split("\n");

    for (const line of lines) {
        const row = document.createElement("div");
        row.className = "row";

        for (const char of line.trim()) {
            if (char !== "0" && char !== "1") continue;
            const cell = document.createElement("div");
            cell.className = "square";
            cell.style.backgroundColor = (char === "1") ? "blue" : "white";
            row.appendChild(cell);
        }

        result.appendChild(row);
    }
});