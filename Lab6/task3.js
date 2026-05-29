const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error");
const gallery = document.querySelector("#gallery");
const preview = document.querySelector("#preview");

btn.addEventListener("click", () => {
    gallery.innerHTML = "";
    preview.innerHTML = "";
    error.textContent = "";

    let files;
    try {
        files = JSON.parse(input.value);
    } catch (e) {
        error.textContent = "Невірний JSON формат!";
        return;
    }

    if (!Array.isArray(files)) {
        error.textContent = "Потрібен масив!";
        return;
    }

    files.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        gallery.appendChild(img);
    });
});

gallery.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img) return;

    preview.innerHTML = "";

    const big = document.createElement("img");
    big.src = img.src;

    preview.appendChild(big);
});