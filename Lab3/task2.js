function generateTableHTML(...inputs) {
    const inputsArr = [...inputs];
    let tableHTML = "<table>\n"

    for (let i = 0; i < inputsArr.length; i++) {
        tableHTML += `\t<tr><td>${inputsArr[i]}</tr></td>\n`
    }

    tableHTML += "</table>"

    return tableHTML;
}

console.log(generateTableHTML("Test 1", "Test 2", "Test 3"));
