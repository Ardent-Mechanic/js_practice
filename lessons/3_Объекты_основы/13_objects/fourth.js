"use strict";

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

function showObj(obj) {
    for (let key in obj) {
        console.log(`key: ${key} val: ${obj[key]}`);
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

showObj(menu)

multiplyNumeric(menu);

showObj(menu)

