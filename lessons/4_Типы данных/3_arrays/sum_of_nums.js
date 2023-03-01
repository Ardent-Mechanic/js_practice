"use strict";

function sumInput() {
    let nums = [];

    while (true) {
        let userAnswer = prompt("Введите число: ", "");
        if (userAnswer === "" || userAnswer === null || !isFinite(userAnswer)) break;
        nums.push(+userAnswer);
    }

    let sum = 0;
    for (let val of nums) {
        sum += val;
    }
    return sum;
}

alert( sumInput() );
