// Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(obj){
    return Object.entries(obj);
}

const objeto = { a: 1, b: 2 };
const matriz = toArray(objeto);
alert(matriz);
