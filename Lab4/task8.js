const img = document.querySelector("img")
const button = document.querySelector("button");
let flag = false;

button.addEventListener('click', () => {
    const imgWidth = +img.getAttribute("width");
    const imgHeight = +img.getAttribute("height");

    if (!flag) {
        img.setAttribute("width", imgWidth * 2)
        img.setAttribute("height", imgHeight * 2)
        flag = true;
        return;
    }

    img.setAttribute("width", imgWidth / 2)
    img.setAttribute("height", imgHeight / 2)
    flag = false;
})