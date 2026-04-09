let balance = +prompt("Введіть ваш баланс");
let price = +prompt("Введіть ціну бургера");
let amount = 0;
let flag = true;

while (flag) {
    if (balance < price) {
        alert(`Ви можете придбати ${amount} бургери і у вас залишиться ${balance} гривень.`)
        flag = false;
    }

    amount += 1;
    balance -= price;
}
