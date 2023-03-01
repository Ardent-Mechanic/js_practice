"use strict";

function readNumber() {
    let userAnswer;

    do {
        userAnswer = prompt("Введите число: ", "");

        if (userAnswer === "" || userAnswer === null) {
            return null;
        }

    } while (!isFinite(userAnswer));
    return +userAnswer;
}

alert(readNumber());
