function toCamelCase(string) {
    return string.split("-").map((elem, index) => index === 0 ? elem : elem.at(0).toUpperCase() + elem.slice(1)).join("");
}

let string = "background-color";

console.log(toCamelCase(string))
