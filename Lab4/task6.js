const form = document.querySelector("form");
const inputs = document.querySelectorAll("section > input, section > textarea");

form.addEventListener('click', (e) => {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].parentElement.classList = "";
    }

    for (let i = 0; i < inputs.length; i++) {
        if (e.target.getAttribute("id") === inputs[i].getAttribute("id")) {
            e.target.parentElement.classList.toggle("colored-background")
            return;
        }
    }
})