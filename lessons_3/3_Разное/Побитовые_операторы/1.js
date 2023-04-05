"use strict";

/* Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false. */

function isInteger(num) {
    return num === (num ^ 0);
}

console.log(isInteger(1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(-0.5)); // false