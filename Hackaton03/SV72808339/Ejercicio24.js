/* 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000. */

let suma = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 == 0){
        suma += i;
    }
}

console.log(`La suma de todos los numeros pares ahsta el 1000 es de ${suma}`)