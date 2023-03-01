function random(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

console.log(random(1, 5));