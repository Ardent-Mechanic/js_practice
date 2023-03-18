"use strict";

/* Добавьте всем функциям в прототип метод defer(ms),
который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:*/


Function.prototype.defer = function(ms) {
    let copy_func = this;
    return function (...args) {
        setTimeout(() => copy_func.apply(this, args), ms);
    }
};

function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
