"use strict";

let newObj = {};

function A() { return newObj; }
function B() { return newObj; }

let a = new A();
let b = new B();

alert( a == b ); // true
