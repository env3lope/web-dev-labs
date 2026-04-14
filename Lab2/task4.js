function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function calculate(equation) {
    let equationArr = equation.split("").filter((value) => value != " ");
    let [firstNumber, operation, secondNumber] = equationArr;
    let result = 0;

    switch (operation) {
        case "+":
            result = add(+firstNumber, +secondNumber)
            break;
        case "-":
            result = subtract(+firstNumber, +secondNumber)
            break;
        case "*":
            result = multiply(+firstNumber, +secondNumber)
            break;
        case "/":
            result = divide(+firstNumber, +secondNumber)
            break;
    }

    return result
}

let flag = true;
while (flag) {
    let equation = prompt("Введіть приклад:")
    alert("Результат: " + calculate(equation))

    let end = prompt("Чи хочете ви завершити виконання програми? (так/ні): ").toLowerCase();
    if (end === "так") {
        flag = false;
    }
}