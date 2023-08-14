// Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) 
// con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargesNums(matrices){
    return matrices.map(subarray => Math.max(...subarray));
}

const matrizDeMatrices = [[4,2,7,1],[20,70,40,90],[1,2,0]];
const resultado = findLargesNums(matrizDeMatrices);
alert(resultado);


