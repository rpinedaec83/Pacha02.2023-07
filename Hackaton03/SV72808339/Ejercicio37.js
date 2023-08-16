/* 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides. */

let a = 40, b = 60;
let temp;

while (b !== 0) {
  temp = b;
  b = a % b;
  a = temp;
}

let mcd = a;

console.log(`El MCD de 40 y 60 es: ${mcd}`);
