//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

function sumaPrimerosCienNumeros() {
    let suma = 0;
    let contador = 1;
  
    do {
      suma += contador;
      contador++;
    } while (contador <= 100);
  
    return suma;
  }
  
  const resultadoSuma = sumaPrimerosCienNumeros();
  alert("La suma de los primeros cien números es: ${resultadoSuma}");
  