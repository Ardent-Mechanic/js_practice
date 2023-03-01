"use strict";

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

}

function checkStringCommand(obj, arr) {
    let [filedName, command, condition] = arr
    switch (command) {
        case "contains":
            return obj[filedName].includes(condition);
        case "starts":
            return obj[filedName].startsWith(condition);
        case "ends":
            return obj[filedName].endsWith(condition);
        default:
            return false;
    }
}

function checkIntCommand(obj, arr) {
    let [filedName, command] = arr;
    if (command.startsWith("<=")) {
        return obj[filedName] <= +command.slice(1);
    } else if (command.startsWith(">=")) {
        return obj[filedName] >= +command.slice(1);
    } else if (command.startsWith("=")) {
        return obj[filedName] == +command.slice(1);
    } else if (command.startsWith("<")) {
        return obj[filedName] < +command.slice(1);
    } else if (command.startsWith(">")) {
        return obj[filedName] > +command.slice(1);
    } else return false;

}

function filter(obj, commandLines) {
    let arr;
    for (let selectCommand of commandLines.split("&")) {
        arr = selectCommand.split("-");
        if (arr.at(-1) == "") {
            if (!checkIntCommand(obj, arr)) return false;
        } else if (arr.length == 3) {
            if (!checkStringCommand(obj, arr)) return false;
        }
    }
    return true;
}

let test_arr = [new Product("2fd2", "2", "7", "ffffabc"),
new Product("fd2dsas2", "3", "5", "abcsddd")];

let test_command1 = "name-contains-fd&price-=2-&quantity->5&description-ends-abc";
let test_command2 = "name-starts-fd&quantity=5"

for (let product of test_arr) {
    if (filter(product, test_command2 )) console.log(product);
}
