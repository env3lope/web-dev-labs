const inputContainer = document.querySelector(".container")
const widthValue = document.querySelector(".width-value")
const heightValue = document.querySelector(".height-value")
const rotateValue = document.querySelector(".rotate-value")
const rectangle = document.querySelector(".rectangle")

function changeRectangleProperties(e) {
    const targetInput = e.target;
    console.log(targetInput)

    switch (targetInput.getAttribute("id")) {
        case "height":
            heightValue.textContent = targetInput.value;
            rectangle.style.height = `${targetInput.value}px`;
            break;
        case "width":
            widthValue.textContent = targetInput.value;
            rectangle.style.width = `${targetInput.value}px`;
            break;
        case "rotate":
            rotateValue.textContent = targetInput.value;
            rectangle.style.transform = `rotate(${targetInput.value}deg)`;
            break;
    }
}

inputContainer.addEventListener('input', (e) => changeRectangleProperties(e))
