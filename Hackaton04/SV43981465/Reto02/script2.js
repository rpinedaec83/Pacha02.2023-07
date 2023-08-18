// Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + Math.pow(num, 3), 0);
    return sum;
}

const resultado = sumOfCubes(1, 5, 9);
alert(resultado);