"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let messagesSet = new WeakSet();

messagesSet.add(messages[0]);
messagesSet.add(messages[1]);

console.log("Read message 0: " + messagesSet.has(messages[0]));