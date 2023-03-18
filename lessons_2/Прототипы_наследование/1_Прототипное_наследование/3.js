"use strict";

/* У нас есть два хомяка: шустрый (speedy) и ленивый (lazy);
оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить? */

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка больше нет еды :(
console.log( lazy.stomach );

/* два прототипа ссылаются на один объект со свойством stomach, у них нет своего собственного свойства,
поэтому все данные записываются в свойство stomach объекта hamster */