"use strict";

"use strict";

// Рекурсия
function printList1(list) {
    if (list.next) {
        printList1(list.next);
    }
    console.log(list.value);
}

// Цикл
function printList2(list) {

    let copyList = list;
    let arr = [];

    while (copyList) {
        arr.push(copyList.value);
        copyList = copyList.next;
    }

    for (let i = arr.length - 1; i > -1; i--) {
        console.log(arr[i]);
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

timeStart = new Date().getTime();
printList2(list);
console.log(`${(new Date().getTime() - timeStart)}ms`);

