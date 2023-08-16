// 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

function aproximacionPi(iteraciones) {
    let piAproximado = 0;
  
    for (let i = 0; i < iteraciones; i++) {
      const termino = 4 / (2 * i + 1);
      if (i % 2 === 0) {
        piAproximado += termino;
      } else {
        piAproximado -= termino;
      }
    }
  
    return piAproximado;
  }
  
  // Ejemplo de uso
  const iteraciones = 100000; // Puedes ajustar el número de iteraciones para obtener una mejor aproximación
  const resultadoPi = aproximacionPi(iteraciones);
  alert("Aproximación de Pi con ${iteraciones} iteraciones: ${resultadoPi}");
  