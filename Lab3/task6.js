const userInput = prompt("Введіть дату в форматі РРРР-MM-ДД, РРРР.MM.ДД або РРРР/MM/ДД");

function getDiffInDays(date) {
    const diffInDays = (((date - Date.now()) / 1000) / 3600) / 24
    return +diffInDays.toFixed(0)
}

function displayDate(userInput) {
    const dateArr = userInput.split(/[-./]+/);
    const userDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
    const diffInDays = getDiffInDays(userDate);
    console.log(diffInDays)

    if (diffInDays === -365) {
        alert("Рік тому")
    }

    if ((diffInDays < -7 && diffInDays > -365) || diffInDays < -365) {
        alert(`${dateArr[0]}.${dateArr[1]}.${dateArr[2]}`)
    }

    if (diffInDays === -7) {
        alert("Тиждень тому")
    }

    if (diffInDays < -1 && diffInDays > -7) {
        alert(diffInDays >= -4 ? `${diffInDays * (-1)} дні тому` : `${diffInDays * (-1)} днів тому`);
    }

    if (diffInDays === -1) {
        alert("Вчора")
    }

    if (diffInDays === 0) {
        alert("Сьогодні")
    }
}

displayDate(userInput)