"use strict";

function formatDate(date) {
    let secDiff = Math.floor((new Date() - date) / 1000);

    if (secDiff < 1) {
        return "прямо сейчас";
    } else if (secDiff < 60) {
        return `${secDiff} сек. назад`;
    } else if (secDiff < 3600) {
        return `${Math.round(secDiff / 60)} мин. назад`;
    }

    return `${("0" + date.getDate()).slice(-2)}.${
        ("0" + (date.getMonth() + 1)).slice(-2)}.${
        ("" + date.getFullYear()).slice(2)} ${
        ("0" + date.getHours()).slice(-2)}:${
        ("0" + date.getMinutes()).slice(-2)}`;

}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000)));