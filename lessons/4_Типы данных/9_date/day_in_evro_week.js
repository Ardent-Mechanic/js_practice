"use strict";

function getLocalDay(date) {
    let dayNum = date.getDay();
    return (dayNum == 0) ? 7 : dayNum;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );