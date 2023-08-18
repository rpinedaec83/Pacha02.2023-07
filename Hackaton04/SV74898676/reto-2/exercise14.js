const squaresSum = (num) => {

    let acum = 0;

    for (let i = 1; i <= num; ++i) {
        acum += Math.pow(i, 2);
    }

    return acum;
}

let totalSum = squaresSum(3);

console.log(totalSum);
