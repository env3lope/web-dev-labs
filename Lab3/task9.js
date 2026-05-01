function findHexColor(text) {
    return text.match(/(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g);
}

console.log(findHexColor(`Приклади кольорів:
#ABC — валідний короткий hex
#A1B2C3 — валідний довгий hex
#123abz — невалідний
#FFFF — не підходить
#abcdef — валідний`))