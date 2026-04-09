let day = +prompt("Введіть день: ");
let month = +prompt("Введіть місяць: ");
let year = +prompt("Введіть рік: ");

const thirtyDaysMonths = [4, 6, 9, 11]

function displayDate() {
    alert(`Попередня дата: ${displayPreviousDate(day, month, year)}\nПоточна дата: ${displayCurrentDate(day, month, year)}\nНаступна дата: ${displayNextDate(day, month, year)}`)
}

function displayCurrentDate(day, month, year) {
    return `${day}.${month}.${year}`
}

function displayPreviousDate(day, month, year) {
    if (day === 1 && month === 1) {
        return `31.12.${year - 1}`
    }

    if (checkIfLeap(year) && day === 1 && month === 3) {
        return `29.${month - 1}.${year}`
    }

    if (thirtyDaysMonths.includes(month - 1) && day === 1) {
        return `30.${month - 1}.${year}`
    }

    if (!thirtyDaysMonths.includes(month - 1) && day === 1) {
        return `31.${month - 1}.${year}`
    }

    return `${day - 1}.${month}.${year}`
}

function displayNextDate(day, month, year) {
    if (checkIfLeap(year) && day === 28 && month === 2) {
        return `${day + 1}.${month}.${year}`
    }

    if (thirtyDaysMonths.includes(month) && day === 30) {
        return `1.${month + 1}.${year}`
    }

    if (day === 31 && month === 12) {
        return `1.1.${year + 1}`
    }

    if (day === 31) {
        return `1.${month + 1}.${year}`
    }

    return `${day + 1}.${month}.${year}`
}

function checkIfLeap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }

    return false
}

displayDate();