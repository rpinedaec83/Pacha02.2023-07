// 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

function sumaPrimerosCienNumeros() {
    let suma = 0;
  
    for (let contador = 1; contador <= 100; contador++) {
      suma += contador;
    }
  
    return suma;
  }
  
  const resultadoSuma = sumaPrimerosCienNumeros();
  alert("La suma de los primeros cien números es: ${resultadoSuma}");
  