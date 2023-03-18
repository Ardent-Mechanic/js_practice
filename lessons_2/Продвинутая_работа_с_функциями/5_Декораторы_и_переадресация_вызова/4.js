"use strict";

/* Создайте «тормозящий» декоратор throttle(f, ms),
 который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд.
  Те вызовы, которые попадают в период «торможения», игнорируются. */

function f(a) {
    console.log(a)
}

function throttle(f, ms){

    let func_stop = false;
    let save_args;
    let save_this;

    return function wrap_func() {

        if (func_stop) {
            save_args = arguments;
            save_this = this;
            return;
        }

        f.apply(this, arguments);

        func_stop = true;

        setTimeout(() => {
            func_stop = false;
            if (save_args) {
                wrap_func.apply(save_this, save_args);
                save_args = null;
                save_this = null;
            }
        }, ms);
    };
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)