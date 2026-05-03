const p = document.querySelector("p");
const button = document.querySelector("button");
const checkboxes = document.querySelectorAll(`input[type="checkbox"]`)


button.addEventListener("click", () => {
    p.textContent = "";
    for (checkbox of checkboxes) {
        if (checkbox.checked) {
            const checkboxValue = checkbox.getAttribute("value")
            p.textContent += ` ${checkboxValue}`
        }
    }
})