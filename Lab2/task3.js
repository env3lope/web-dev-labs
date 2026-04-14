let input = "backgroundColor";


function toKebabCase(input) {
    return input.split("").map(elem => {
        if (elem == elem.toUpperCase()) {
            elem = "-" + elem.toLowerCase();
            return elem;
        }
        return elem;
    }).join("")
}


console.log(toKebabCase(input))