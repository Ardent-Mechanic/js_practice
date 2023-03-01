import {Clock} from './clock.js';

class ExtendedClock extends Clock {
    constructor({template}) {
        super(template);
        this.template = template;
        this.precision = 1000;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new ExtendedClock({template: 'h:m:s'});
clock.start();
setTimeout(() => clock.stop(), 3000);
