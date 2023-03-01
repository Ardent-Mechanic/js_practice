"use strict";

function pow(x, n) {
    return x ** n;
}

let number = prompt("Введите число", "");
let numberDegree = prompt("Введите степень", "");

if (numberDegree % 1 == 0) {
    alert(pow(number, numberDegree));
} else {
    alert(`Степень ${numberDegree} не поддерживается, используйте натуральное число`);
}
