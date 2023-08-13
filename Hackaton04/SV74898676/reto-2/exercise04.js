const sumOfNumbers = (...args) => {
    return args.reduce((acc, current) => acc + current);
}

let totalSum = sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(totalSum);