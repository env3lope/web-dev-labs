let flag = true;

let sum = 0;
let equation = "";

while (flag) {
    let input = +prompt("Введіть число: ")

    if (input === 0) {
        equation += "0";
        alert(`${equation} = ${sum}`)
        flag = false;
    } else {
        sum += input;
        equation += `${input.toString()} + `
    }
}

