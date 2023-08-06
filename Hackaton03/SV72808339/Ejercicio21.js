/* 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número. */

const num = 5;
let fact = 1;

for (let index = num; index > 0; index--) {
    fact = fact * index
}

console.log(`El factorial de ${num} es ${fact}`)