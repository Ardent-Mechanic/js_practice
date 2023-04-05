"use strict";

/* Используя Intl.Collator, отсортируйте массив */


let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(function(first, second) {
    return collator.compare(first, second);
});

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК