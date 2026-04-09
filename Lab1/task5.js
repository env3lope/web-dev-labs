let flag = true;

while (flag) {

    let firstNumber = +prompt("Введіть перше число: ")
    let operation = prompt("Введіть дію: ")
    let secondNumber = +prompt("Введіть друге число: ")
    let result = 0;


    switch (operation) {
        case "+":
            result = add(firstNumber, secondNumber)
            break;
        case "-":
            result = subtract(firstNumber, secondNumber)
            break;
        case "*":
            result = multiply(firstNumber, secondNumber)
            break;
        case "/":
            result = divide(firstNumber, secondNumber)
            break;
    }

    alert(`Результат виразу ${firstNumber} ${operation} ${secondNumber} = ${result}`)

    let end = prompt("Чи хочете ви завершити виконання програми? (так/ні): ").toLowerCase();

    if (end === "так") {
        flag = false;
    }
}

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