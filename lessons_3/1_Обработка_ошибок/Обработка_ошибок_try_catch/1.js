"use strict";

/* Сравните два фрагмента кода.

Первый использует finally для выполнения кода после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
} finally {
  очистить рабочее пространство
}
Второй фрагмент просто ставит очистку после try..catch:

try {
  начать работу
  работать
} catch (e) {
  обработать ошибку
}

очистить рабочее пространство
Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.

Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы?
 Если такое преимущество есть, то дайте пример, когда оно проявляется. */

function testFunc_1(){
    try {
        console.log("Выполняем что-то");
        throw new Error("Новая ошибка");
    } catch (err) {
        if (err.name != "Старая ошибка") throw err;
    } finally {
        console.log("очистка");
    }
}

function testFunc_2() {
    try {
        console.log("Выполняем что-то");
        throw new Error("Новая ошибка");
    } catch (err) {
        if (err.name != "Старая ошибка") throw err;
    }
}

try {
    testFunc_1();
} catch (err) {
    console.log(err.name);
}

// без блока finally очистка не будет выполнена.

try {
    testFunc_2();
    console.log("очистка");
} catch (err) {
    console.log(err.name);
}

