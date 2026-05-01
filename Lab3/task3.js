const container = document.querySelector("#container")

function createHeaders(n) {
    for (let i = 1; i <= n; i++) {
        const header = document.createElement("h2");
        header.textContent = `Header${i}`
        container.appendChild(header);
    }
}

createHeaders(8)