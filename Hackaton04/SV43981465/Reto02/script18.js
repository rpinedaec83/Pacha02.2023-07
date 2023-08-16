// Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(matriz){
    return matriz.filter((valor) => typeof valor == 'number');
}

const matriz = [1, 2, 3, "x", "y", 10];
const resultado = filterList(matriz);
alert(resultado);

