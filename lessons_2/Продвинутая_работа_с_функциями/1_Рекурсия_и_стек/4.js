"use strict";

// Рекурсия
function printList1(list) {
    console.log(list.value);
    return list.next !== null ? printList1(list.next) : null;
}

// Цикл
function printList2(list) {
    while (list !== null) {
        console.log(list.value);
        list = list.next;
    }
}


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


let timeStart = new Date().getTime();
printList1(list);
console.log(`${(new Date().getTime() - timeStart)}ms`);

timeStart = new Date().getTime()
printList2(list);
console.log(`${(new Date().getTime() - timeStart)}ms`);
