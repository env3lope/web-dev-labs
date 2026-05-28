const messages = document.querySelector("#messages");
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const textInput = document.querySelector("#text");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const text = textInput.value.trim();

    if (!name || !text) return;

    const time = new Date().toLocaleString();

    const message = document.createElement("div");
    message.className = "message";

    message.innerHTML = `
        <div class="top">
            <div class="name">${name}</div>
            <div class="time">${time}</div>
        </div>

        <div class="line"></div>

        <div class="text">${text}</div>
    `;

    messages.appendChild(message);

    nameInput.value = "";
    textInput.value = "";
});
