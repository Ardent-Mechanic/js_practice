"use strict";

/* Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit? */

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat()
console.log(rabbit.full); // rabbit  так как this берет контекст метода rabbit и full становится его свойством
console.log(animal.full)

