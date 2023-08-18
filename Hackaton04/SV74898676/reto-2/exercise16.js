const countdown = (num) => {
    return Array.from({length: num + 1}, (_, i) => num - i);
}

let array = countdown(5);

console.log(array);