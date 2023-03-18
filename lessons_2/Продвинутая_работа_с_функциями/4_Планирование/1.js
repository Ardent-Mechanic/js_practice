"use strict";

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
 начиная от from и заканчивая to.

Сделайте два варианта решения.

1. Используя setInterval.
2. Используя рекурсивный setTimeout. */

function printNumbers1(from, to){

    let timerId = setInterval(() => {
        if (from <= to) {
            console.log(from++);
        } else clearInterval(timerId);
    }, 1000)
}

function printNumbers2(from, to){

    let timerId = setTimeout(function tick() {
        if (from <= to) {
            console.log(from++);
            timerId = setTimeout(tick, 1000);
        }
    }, 1000)
}

printNumbers1(1, 3);
printNumbers2(1, 3);

