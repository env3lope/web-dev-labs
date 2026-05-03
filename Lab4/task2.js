const checkboxes = document.querySelector(".checkboxes")
const textField = document.querySelector(".text-field")

checkboxes.addEventListener('click', (e) => {
    const attributeValue = e.target.getAttribute("value");

    if (attributeValue === null) {
        return
    }

    if (!e.target.checked) {
        textField.textContent = textField.textContent.replace(`${attributeValue}; `, "")
        return
    }

    textField.textContent += `${attributeValue}; `
})