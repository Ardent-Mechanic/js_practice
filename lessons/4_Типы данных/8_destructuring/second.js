"use strict";

function topSalary(salaries) {

    let max_val = 0;
    let max_key;

    for (let [name, value] of Object.entries(salaries)) {
        if (value > max_val) {
            max_key = name;
            max_val = value;
        }
    }
    return max_key;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));
