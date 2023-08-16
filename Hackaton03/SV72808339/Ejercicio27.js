/* 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida 
de números positivos, se debe acabar el programa al ingresar un número negativo. */

let numeros = [13,74,21,43,54,64,104,21,245,34,-12]
let suma = 0;
let cont = 0;

for (i = 0; i < numeros.length; i++){
    if (numeros[i] > 0){
        suma += numeros[i];
        cont += 1;
        console.log(numeros[i])
    } else {
        break;
    }
}
console.log(`La media de todos los números es: ${suma/cont}`)