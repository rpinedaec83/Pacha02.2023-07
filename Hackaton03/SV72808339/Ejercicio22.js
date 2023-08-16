/* 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números. */

const num = 20;
let suma = 0;

for (let i = 0; i <= num; i++) {
    suma += i;
}

console.log(`La suma de los primeros ${num} números es: ${suma}`)