// Cree una función que tome un número como argumento y devuelva una matriz de números 
// contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(n){
    const matriz = [];
    for(i=n;i>=0;i--){
        matriz.push(i);
    }
    return matriz;
}

const numero = 5;
const resultado = countdown(numero);
alert(resultado);
