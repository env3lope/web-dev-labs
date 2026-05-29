class Student {
    constructor(lastName, firstName, grades) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.grades = grades;
    }

    getAvg() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let html = `
            <table border="1" cellpadding="5">
                <tr>
                    <th>Прізвище</th>
                    <th>Ім'я</th>
                    <th>Оцінки</th>
                </tr>
        `;

        this.students.forEach(s => {
            html += `
                <tr>
                    <td>${s.lastName}</td>
                    <td>${s.firstName}</td>
                    <td>${s.grades.join(", ")}</td>
                </tr>
            `;
        });

        html += "</table>";
        return html;
    }
}

class StylesTable extends ListOfStudents {
    getStyles() {
        return `
        <style>
            table {
                border-collapse: collapse;
                margin-top: 10px;
            }

            th {
                background: #eee;
            }

            td, th {
                padding: 5px;
                border: 1px solid black;
                text-align: center;
            }
        </style>
        `;
    }

    getAvg() {
        return this.students.map(s => ({
            name: s.lastName + " " + s.firstName,
            avg: s.getAvg()
        }));
    }

    getTotalAvg() {
        const all = this.students.flatMap(s => s.grades);
        const sum = all.reduce((a, b) => a + b, 0);
        return sum / all.length;
    }

    getTableList() {
        let html = this.getStyles();

        html += `
            <table>
                <tr>
                    <th>Прізвище</th>
                    <th>Ім'я</th>
                    <th>Оцінки</th>
                    <th>Середній бал</th>
                </tr>
        `;

        this.students.forEach(s => {
            html += `
                <tr>
                    <td>${s.lastName}</td>
                    <td>${s.firstName}</td>
                    <td>${s.grades.join(", ")}</td>
                    <td>${s.getAvg().toFixed(2)}</td>
                </tr>
            `;
        });

        html += "</table>";

        return html;
    }
}

const students = [
    new Student("Іваненко", "Іван", [80, 90, 75]),
    new Student("Петренко", "Олена", [95, 88, 92]),
    new Student("Коваль", "Андрій", [70, 60, 65])
];

const table = new StylesTable(students);

const output = document.querySelector("#output");

output.innerHTML =
    table.getTableList() +
    `<p><b>Загальний середній бал групи:</b> ${table.getTotalAvg().toFixed(2)}</p>`