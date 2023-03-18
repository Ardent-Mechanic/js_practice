"use strict";

// Рекурсия (самая медленная) переполняется при больших значениях
function sumTo1(n) {
    return n > 1 ? n + sumTo1(n - 1) : n;
}

// Циклом (средняя по скорости)
function sumTo2(n) {
    let num = 0;
    for (let i = 1; i <= n; i++) {
        num += i;
    }
    return num;
}

// Арифметической прогрессией (самая быстрая)
function sumTo3(n) {
   return Math.round(n*(n+1)/2);
}

let timeStart = new Date().getTime();
console.log(sumTo1(10000));
console.log(`${(new Date().getTime() - timeStart)}ms`);

timeStart = new Date().getTime()
console.log(sumTo2(10000000));
console.log(`${(new Date().getTime() - timeStart)}ms`);

timeStart = new Date().getTime()
console.log(sumTo3(10000000));
console.log(`${(new Date().getTime() - timeStart)}ms`);