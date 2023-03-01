"use strict";

let age = prompt("Сколько вам лет?", "");


// первый вариант
if (!(age >= 14 && age <= 90)) {
    alert(true);
} else {
    alert(false);
}

// второй вариант
if (age < 14 || age > 90) {
    alert(true);
} else {
    alert(false);
}