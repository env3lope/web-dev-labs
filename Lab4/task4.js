const correctAnswersPercentage = document.querySelector(".correct-percentage");
const correctAnswersCount = document.querySelector(".correct-answers");
const answersCount = document.querySelector(".answers-count");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const equation = document.querySelector(".equation");
const checkAnswer = document.querySelector(".check-answer");
const checkUserGuessBtn = document.querySelector(".check-user-guess");
const inputUserGuess = document.querySelector("#userGuess")

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

    equation.textContent = `${firstNumberOfEquation} x ${secondNumberOfEquation} =`
    equationAnswer = answerOfEquation;
    isChecked = false;
    checkAnswer.textContent = "";
    inputUserGuess.value = ""
}

function checkUserGuess() {
    if (isChecked) {
        return
    }

    const userGuess = +inputUserGuess.value;
    if (equationAnswer === userGuess) {
        rightAnswers += 1;
        checkAnswer.textContent = "Правильно!"
    } else {
        wrongAnswers += 1;
        checkAnswer.textContent = `Помилка! Правильна відповідь ${equationAnswer}`
    }

    answerCount += 1;
    isChecked = true;

    const percentage = (rightAnswers / answerCount) * 100;
    correctAnswersPercentage.textContent = `${percentage.toFixed(0)}%`;
    correctAnswersCount.textContent = rightAnswers;
    answersCount.textContent = answerCount;
}


nextQuestionBtn.addEventListener("click", generateTest)
checkUserGuessBtn.addEventListener("click", (e) => checkUserGuess(e))

document.addEventListener('DOMContentLoaded', generateTest)