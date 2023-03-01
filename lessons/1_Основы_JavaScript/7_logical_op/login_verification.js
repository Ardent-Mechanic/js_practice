"use strict";

let userAnswer = prompt("Кто там?", "");

if (userAnswer == "Админ") {
    let password = prompt("Пароль?", "");
    if (password == "Я Главный") {
        alert("Здравствуйте!");
    } else if (password == "" || password == null) {
        alert("Отмена");
    } else {
        alert("Неверный пароль");
    }
} else if (userAnswer == "" || userAnswer == null) {
    alert("Отмена");
} else {
    alert("Я вас не знаю");
}
