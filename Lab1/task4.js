let input = prompt("Введіть число в діапазоні від 1 до 69: ")

const singleDigits = {
    "1": "один",
    "2": "два",
    "3": "три",
    "4": "чотири",
    "5": "п'ять",
    "6": "шість",
    "7": "сім",
    "8": "вісім",
    "9": "дев'ять"
}

const fromTenToNineteen = {
    "11": "одинадцять",
    "12": "дванадцять",
    "13": "тринадцять",
    "14": "чотирнадцять",
    "15": "п'ятнадцять",
    "16": "шістнадцять",
    "17": "сімнадцять",
    "18": "вісімнадцять",
    "19": "дев'ятнадцять",
}

const tens = {
    "20": "двадцять",
    "30": "тридцять",
    "40": "сорок",
    "50": "п'ятдесят",
    "60": "шістдесят",
}

function displayNumberString(input) {
    if (input.length === 1) {
        alert(`${input} - ${singleDigits[input]}`)
    }

    if (input.length === 2 && Object.hasOwn(fromTenToNineteen, input)) {
        alert(`${input} - ${fromTenToNineteen[input]}`)
    }

    alert(`${input} - ${tens[input.replace(/[1-9]$/, 0)]} ${input.charAt(1) != "0" ? singleDigits[input.charAt(1)] : ""}`)
}

displayNumberString(input);