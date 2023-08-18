// Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(matriz){
    const min = Math.min(...matriz);
    const max = Math.max(...matriz);
    return [min, max];
}

const numero = [1, 2, 3, 4, 5];
const resultado = minMax(numero);
alert(resultado);