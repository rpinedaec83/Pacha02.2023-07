// Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento 
// que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir
// el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function repeat(elemento, tiempos){
    /*const matriz = [];
    for(i=1;i<=tiempos;i++){
        matriz.push(elemento);
    }
    return matriz;*/
    return Array.from({ length: tiempos }, () => elemento);
}

const elemento = 13;
const tiempos = 5;
const resultado = repeat(elemento, tiempos);
alert(resultado);
