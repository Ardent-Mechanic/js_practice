"use strict";

/* Напишите функцию sum, которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(val){
    sum.value = (sum.value) ? (sum.value += val) : (sum.value = val);
    return sum;

}

sum.toString = () => {
    return sum.value
};
/*
 alert выводит значение 9
console.log [Function: sum] { toString: [Function (anonymous)], value: 9 }
 */
console.log(sum(1)(2)(6));





