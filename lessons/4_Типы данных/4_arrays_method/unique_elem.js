"use strict";

function unique(arr) {
    let new_arr = [];
    for (let value of arr) {
        if (!new_arr.includes(value)) new_arr.push(value);
    }
    return new_arr;

}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O