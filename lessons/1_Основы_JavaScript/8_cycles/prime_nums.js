"use strict";

let numbersAmount = 30;

mainCircle:
for (let number = 2; number <= numbersAmount; number++) {
    for (let divider = 2; divider < number; divider++) {
        if (number % divider == 0) continue mainCircle;
    }
    console.log(number);
}