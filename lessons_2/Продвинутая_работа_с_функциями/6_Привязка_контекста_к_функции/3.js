"use strict";

/* В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ. */

function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test ); // после смены контекста свойство test уже не будет существовать (undefined)