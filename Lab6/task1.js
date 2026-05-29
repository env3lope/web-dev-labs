const area = document.querySelector("#area");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let history = [];
let index = -1;

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, val] = c.split("=");
        if (key === name) return JSON.parse(decodeURIComponent(val));
    }
    return null;
}

const saved = getCookie("textarea_history");
if (saved) {
    history = saved;
    index = history.length - 1;
    area.value = history[index] || "";
}

area.addEventListener("input", () => {
    history = history.slice(0, index + 1);

    history.push(area.value);
    index = history.length - 1;

    setCookie("textarea_history", history);
});


prev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        area.value = history[index];
    }
});

next.addEventListener("click", () => {
    if (index < history.length - 1) {
        index++;
        area.value = history[index];
    }
});