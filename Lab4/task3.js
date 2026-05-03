const correctAnswersPercentage = document.querySelector(".correct-percentage");
const correctAnswersCount = document.querySelector(".correct-answers");
const answersCount = document.querySelector(".answers-count");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const equation = document.querySelector(".equation");
const answers = document.querySelector(".answers");
const checkAnswer = document.querySelector(".check-answer")
const answerRadio = document.querySelectorAll(`input[type="radio"]`)

let rightAnswers = 0;
let wrongAnswers = 0;
let answerCount = 0;
let isChecked = false;
let equationAnswer = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTest() {
    const firstNumberOfEquation = getRandomInt(1, 9);
    const secondNumberOfEquation = getRandomInt(1, 9);
    const answerOfEquation = firstNumberOfEquation * secondNumberOfEquation;

    const setOfAnswers = new Set([answerOfEquation]);
    while (setOfAnswers.size != 4) {
        let number = getRandomInt(answerOfEquation - 5, answerOfEquation + 5);

        if (number < 1) {
            continue;
        }

        setOfAnswers.add(number)
    }

    const answersOfTest = [...setOfAnswers]

    let answersLeft = answersOfTest.length - 1;
    for (let i = 0; i < answerRadio.length; i++) {
        let index = getRandomInt(0, answersLeft);
        let answer = answersOfTest[index];
        answersOfTest.splice(index, 1)
        answersLeft = answersOfTest.length - 1;

        if (answer === answerOfEquation) {
            answerRadio[i].setAttribute("isCorrect", true)
        } else {
            answerRadio[i].setAttribute("isCorrect", false)
        }

        answerRadio[i].setAttribute("value", answer);
        answerRadio[i].labels[0].textContent = "";
        answerRadio[i].labels[0].textContent += answer;
    }

    equation.textContent = `${firstNumberOfEquation} x ${secondNumberOfEquation} =`
    equationAnswer = answerOfEquation;
    isChecked = false;
    checkAnswer.textContent = "";
}

function checkUserGuess(event) {
    if (isChecked) {
        return
    }

    if (event.target.nodeName != "INPUT") {
        return
    }

    const isUserGuessed = event.target.getAttribute("isCorrect");
    if (isUserGuessed === "true") {
        rightAnswers += 1;
        checkAnswer.textContent = "Правильно!"
    } else {
        wrongAnswers += 1;
        checkAnswer.textContent = `Помилка! Правильна відповідь ${equationAnswer}`
    }

    answerCount += 1;
    isChecked = true;

    const percentage = (rightAnswers / answerCount) * 100
    correctAnswersPercentage.textContent = `${percentage.toFixed(0)}%`;
    correctAnswersCount.textContent = rightAnswers;
    answersCount.textContent = answerCount;
}


nextQuestionBtn.addEventListener("click", generateTest)
answers.addEventListener("click", (e) => checkUserGuess(e))

document.addEventListener('DOMContentLoaded', generateTest)