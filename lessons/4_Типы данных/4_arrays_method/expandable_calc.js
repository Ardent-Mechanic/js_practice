"use strict";

function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        let arr = str.split(" "),
            firstVal = +arr[0],
            operation = arr[1],
            secondVal = +arr[2]

        return this.methods[operation](firstVal, secondVal);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };

}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
