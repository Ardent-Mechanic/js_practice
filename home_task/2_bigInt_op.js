"use strict";

/*
2.Написать модуль, который способен выполнять операции с числами любой длины.
4 метода для сложения, умножения, вычитания и деления.
*/

class Operations {

    maxSafeInt = BigInt(Number.MAX_SAFE_INTEGER);

    checkSizeNumber(num1, num2) {
        return (BigInt(num1) > this.maxSafeInt || BigInt(num2) > this.maxSafeInt);
    }

    checkValidNumbers(num1, num2) {
        return (isFinite(num1) && isFinite(num2));
    }

    sum(num1, num2) {
        if (!this.checkValidNumbers(num1, num2)) {
            return "Вы ввели не число";
        }
        if (this.checkSizeNumber(num1, num2)) {
            return BigInt(num1) + BigInt(num2);
        } else return num1 + num2;
    }

    diff(num1, num2) {
        if (!this.checkValidNumbers(num1, num2)) {
            return "Вы ввели не число";
        }
        if (this.checkSizeNumber(num1, num2)) {
            return BigInt(num1) - BigInt(num2);
        } else return num1 - num2;
    }

    mul(num1, num2) {
        if (!this.checkValidNumbers(num1, num2)) {
            return "Вы ввели не число";
        }
        if (this.checkSizeNumber(num1, num2)) {
            return BigInt(num1) * BigInt(num2);
        } else return num1 * num2;
    }

    div(num1, num2) {
        if (!this.checkValidNumbers(num1, num2)) {
            return "Вы ввели не число";
        }
        if (this.checkSizeNumber(num1, num2)) {
            return BigInt(num1) / BigInt(num2);
        } else return Math.floor(num1 / num2);
    }

}

let opp = new Operations();

console.log(opp.sum(9007199254740991123, 90071992547409932131231313));
console.log(opp.diff(9007199254740991123, 90071992547409932131231313));
console.log(opp.mul(-9007199254740991123, 90071992547409932131231313));
console.log(opp.div(900719925474099112399999999, 90071992547409932131231313));
console.log();
console.log(opp.sum(3, 5));
console.log(opp.diff(3, 5));
console.log(opp.mul(3, 5));
console.log(opp.div(3, 5));
