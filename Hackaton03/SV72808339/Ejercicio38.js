/* 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto. */

const num = 6;
let sum = 0;

for (let i = 1; i <= num / 2; i++) {
  if (num % i === 0) {
    sum += i;
  }
}

if (sum === num) {
  console.log(`El ${num} ES un número perfecto`);
} else {
  console.log(`El ${num} NO es un número perfecto`);
}