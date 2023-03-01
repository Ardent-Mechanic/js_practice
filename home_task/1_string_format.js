"use strict";

/*
1. Написать модуль, который будет включать в себя следующие методы.
1.1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
1.2. Преобразование строки с целью правильно расстановки пробелов. “Вот пример строки,в которой
     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .
     Если есть лишние подряд идущие пробелы, они должны быть устранены.” =>
     “Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы,
     а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.”
1.3. Посдчитывающие кол-во слов в строке.
1.4. Подсчитывающий, уникальные слова. “Текст, в котором слово текст несколько раз встречается и слово тоже”
     - в ответе, что “слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз“. Самостоятельно придумать
     наиболее удачную структуру данных для ответа.
*/

class Format {
    constructor(str) {
        this.str = str;
    }

    capitalize() {
        return (this.str.length > 1) ? this.str[0].toUpperCase() + this.str.slice(1) : this.str.toUpperCase;
    }

    prettyFormat() {
        let new_str = this.str.replace(/ /g, "");
        let index = 0;

        while (index < new_str.length) {

            if (",:;?!.".includes(new_str[index])) {
                new_str = new_str.slice(0, index + 1) + " " + new_str.slice(index + 1)
                index++;
            } else if (new_str[index] == "-") {
                new_str = new_str.slice(0, index) + " " + new_str[index] + " " + new_str.slice(index + 1)
                index++;
            }

            index++;
        }

        return (new_str.at(-1)  == " ") ? new_str.slice(0, -1) : new_str;;

    }

    countWords() {
        let new_str = this.prettyFormat();
        return new_str.split(" ").length;
    }

    countUniqueWords() {
        let new_str = this.prettyFormat();

        return Array.from(new Set(new_str.replace(/ /g, "").replace(
            /-? [,.!?;:\s]+/g, " ").slice(0, -1).replace(/[,.!?;:\s-?]+/g, " ").split(" "))).length;
    }
}

let new_string = new Format("помидор,  абрикос:  яблоко-     помидор. груша,груша.груша?груша!")
console.log(new_string.capitalize());
console.log(new_string.countWords());
console.log(new_string.countUniqueWords());
console.log(new_string.prettyFormat());
