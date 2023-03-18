"use strict";

/* С помощью свойства __proto__ задайте прототипы так,
 чтобы поиск любого свойства выполнялся по следующему пути:
  pockets → bed → table → head.
  Например, pockets.pen должно возвращать значение 3
  (найденное в table), а bed.glasses – значение 1 (найденное в head).

Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses
или через head.glasses? При необходимости составьте цепочки поиска и сравните их. */

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 200,
    __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses);

// не важно, так как движок запомнит, откуда взят метод из прототипа или объекта