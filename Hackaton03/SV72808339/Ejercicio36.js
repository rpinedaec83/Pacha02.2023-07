/* 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci. */

const num = 10;

let a = 1, b = 1;

for (let i = 0; i <= num; i++) {
    console.log(a)
    let c = a + b;
    a = b;
    b = c;
}