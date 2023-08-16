/* 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta. */

const num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}

console.log(`Factorial de ${num} es ${fact}`)