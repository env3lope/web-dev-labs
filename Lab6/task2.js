const form = document.querySelector("#form");

form.addEventListener("input", () => {
    const data = {};
    form.querySelectorAll("input, textarea, select").forEach(el => {
        if (el.type === "checkbox") {
            data[el.name] = el.checked;
        }
        else if (el.type === "radio") {
            if (el.checked) data[el.name] = el.value;
        }
        else {
            data[el.name] = el.value;
        }
    });

    localStorage.setItem("formData", JSON.stringify(data));
});

window.addEventListener("load", () => {
    const saved = JSON.parse(localStorage.getItem("formData"));
    if (!saved) return;

    form.querySelectorAll("input, textarea, select").forEach(el => {
        const value = saved[el.name];

        if (el.type === "checkbox") {
            el.checked = value || false;
        }
        else if (el.type === "radio") {
            el.checked = (el.value === value);
        }
        else if (value !== undefined) {
            el.value = value;
        }
    });
});