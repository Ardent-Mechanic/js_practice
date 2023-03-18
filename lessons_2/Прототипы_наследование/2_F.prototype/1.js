"use strict";

/* Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором –
 мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();

Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
 И пример функции-конструктора, с которой такой код поведёт себя неправильно. */

function Func(val) {
    this.val = val;
}


let obj1 = new Func(true);
let obj2 = new obj1.constructor(false);
console.log(obj2.val);

Func.prototype = {};
// В следствии отсутствия метода prototype свойство constructor берется у объекта Object
obj1 = new Func(true);
obj2 = new obj1.constructor(false);
console.log(obj2.val);
