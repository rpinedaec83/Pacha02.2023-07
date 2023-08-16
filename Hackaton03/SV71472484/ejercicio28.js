// 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

let suma = 0
let i = 0
 
do {
    suma = suma + i;
    i = i + 1;
  } while (i < 101);

  document.write("La suma de los primeros 100 numeros es: "+ suma)