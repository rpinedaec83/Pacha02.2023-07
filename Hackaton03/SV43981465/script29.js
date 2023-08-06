// 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

function sumaPrimerosCienNumeros() {
    let suma = 0;
    let contador = 1;
  
    while (contador <= 100) {
      suma += contador;
      contador++;
    }
  
    return suma;
  }
  
  const resultadoSuma = sumaPrimerosCienNumeros();
  alert("La suma de los primeros cien números es: ${resultadoSuma}");
  