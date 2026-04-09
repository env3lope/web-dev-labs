let number = prompt("Введіть п'ятизначне число");

let numberArr = number.split("");
numberArr.unshift(numberArr.pop());

alert(numberArr.join(""));
