// Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(matriz){
    const multiplicador = matriz.length;
    return matriz.map(valor => valor*multiplicador);
}

const matriz = [2, 3, 1, 0];
const resultado = multiplyByLength(matriz);
alert(resultado);
