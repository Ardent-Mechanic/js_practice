"use strict";

function aclean(arr) {
    let map = new Map();

    for (let value of arr) {
        let key = value.toLowerCase().split("").sort().join("");
        map.set(key, value);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"