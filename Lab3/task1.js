const firstParagraph = document.querySelector(".first-paragraph");
const secondParagraph = document.querySelector(".second-paragraph");
const thirdParagraph = document.querySelector(".third-paragraph");

function fontSize(input, px, elem) {
    elem.textContent = string;
    elem.style.fontSize = `${px}px`;
}

fontSize("Test 1", 16, firstParagraph)
fontSize("Test 2", 24, secondParagraph)
fontSize("Test 3", 48, thirdParagraph)