/* 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n. */

const num = 25;
let suma = 0;

for (let i = 0; i <= num; i++) {
    if (i % 2 != 0){
        suma += i;
    }
}

console.log(`La suma de todos los impares menores o iguales a ${num} es: ${suma}`)