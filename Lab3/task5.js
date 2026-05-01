const showDateButton = document.querySelector("#show-date")
const dateCell = document.querySelector("#date-cell")

const months = {
    0: "Січня",
    1: "Лютого",
    2: "Березня",
    3: "Квітня",
    4: "Травня",
    5: "Червень",
    6: "Липень",
    7: "Серпень",
    8: "Вересень",
    9: "Жовтень",
    10: "Листопад",
    11: "Грудень"
}

const days = {
    0: "Неділя",
    1: "Понеділок",
    2: "Вівторок",
    3: "Середа",
    4: "Четвер",
    5: "П'ятниця",
    6: "Субота"
}

function showTodayDate() {
    const todayDate = new Date();

    const dayOfWeek = todayDate.getDay();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth();
    const day = todayDate.getDate();
    const hours = todayDate.getHours();
    const minutes = todayDate.getMinutes();
    const seconds = todayDate.getSeconds();

    dateCell.textContent = `Дата: ${day} ${months[month]} ${year} року\nДень: ${days[dayOfWeek]}\nЧас: ${hours}:${minutes}:${seconds}`
}

showDateButton.addEventListener("click", showTodayDate);