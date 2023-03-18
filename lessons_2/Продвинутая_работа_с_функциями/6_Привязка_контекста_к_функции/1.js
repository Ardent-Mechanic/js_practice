"use strict";

/* Что выведет функция? */

function f() {
    console.log( this ); // null так как изменили контекст методом bind
}

let user = {
    g: f.bind(null)
};

user.g();