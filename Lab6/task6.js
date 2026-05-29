const btn = document.querySelector("#btn");
const gallery = document.querySelector("#gallery");

async function loadDogs() {
    gallery.innerHTML = "";

    for (let i = 0; i < 8; i++) {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        const img = document.createElement("img");
        img.src = data.message;

        gallery.appendChild(img);
    }
}

btn.addEventListener("click", loadDogs);