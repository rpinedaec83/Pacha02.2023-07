const multiplyByLength = (array) => {
    return array.map(item => item * array.length);
}

let newSum = multiplyByLength([2, 3, 1, 0]);

console.log(newSum);