const form = document.querySelector("#userForm");
const table = document.querySelector("#usersTable");

let userNumber = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;

    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = userNumber;
    cell2.textContent = firstName;
    cell3.textContent = lastName;

    userNumber++;

    form.reset();
});