"use strict";

// старый цикл
for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}

// новый цикл
let num = 0;
while (num < 3) {
    alert(`number ${num++}!`);
}