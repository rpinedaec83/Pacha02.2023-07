/* 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique 
y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los 
    valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números. */

let numbers = [10, 50, 30, 40];
let pares = 0;

for (let i = 0; i < 4; i++) {
  if (numbers[i] % 2 === 0) {
    pares++;
  }
}

console.log(pares, "números son pares");

let may = 0;
for (let i = 0; i < 4; i++) {
  if (numbers[i] > may) {
    may = numbers[i];
  }
}

console.log(may, "es el mayor de todos");

if (numbers[2] % 2 === 0) {
  console.log(`Cuadrado del ${numbers[1]}: ${numbers[1]**2}`);
}

if (numbers[0] < numbers[3]) {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    sum += numbers[i];
  }
  console.log("Media de los 4 números:", sum / 4);
  console.log("Suma de todos:", sum);
}

if (numbers[1] > numbers[2]) {
  if (numbers[2] >= 50 && numbers[2] <= 700) {
    console.log(`El ${numbers[2]} está entre 50-700`);
  } else {
    console.log(`El ${numbers[2]} NO está entre 50-700`);
  }
}

