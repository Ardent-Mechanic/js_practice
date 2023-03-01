"use strict";

let UserAnswer;

do {
    UserAnswer = prompt("Введите число больше 100: ", "");
} while (UserAnswer && UserAnswer <= 100);
