// Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(matriz){
    const min = Math.min(...matriz);
    const max = Math.max(...matriz);
    const diff = max - min;
    return [min, max, diff];
}

const matriz = [10, 4, 1, 4, -10, -50, 32, 21];
const resultado = diffMaxMin(matriz);
alert(`Smallest number is ${resultado[0]}, biggest is ${resultado[1]}. Result is ${resultado[2]}`);
