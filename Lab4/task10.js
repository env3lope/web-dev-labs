const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const total = slides.children.length;
const width = 250;

function updateSlider() {
    slides.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener("click", () => {
    index++;
    if (index >= total) {
        index = 0;
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = total - 1;
    }
    updateSlider();
});