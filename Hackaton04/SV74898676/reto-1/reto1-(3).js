const sumOfCubes = (...args) => {
  return args.reduce((acc, current) => acc + Math.pow(current, 3));
}

let result = sumOfCubes(1, 5, 9);

console.log(result);