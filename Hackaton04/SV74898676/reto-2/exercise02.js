const sumOfCubes = (...args) => {
    return args.reduce((acc, current) => { return acc + Math.pow(current, 3); } );
}

let sumaTotal = sumOfCubes(1, 5, 9);

console.log(sumaTotal);