// 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
// Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...

function aproximacionPi(iteraciones) {
    let piAproximado = 3;
    let signo = 1;
    let denominador1 = 2;
    let denominador2 = 3;
    let denominador3 = 4;
  
    for (let i = 0; i < iteraciones; i++) {
      const termino = (4 / (denominador1 * denominador2 * denominador3)) * signo;
      piAproximado += termino;
  
      denominador1 += 2;
      denominador2 += 2;
      denominador3 += 2;
      signo *= -1;
    }
  
    return piAproximado;
  }
  
  const iteraciones = 100000; // Puedes ajustar el número de iteraciones para obtener una mejor aproximación
  const resultadoPi = aproximacionPi(iteraciones);
  alert("Aproximación de Pi con ${iteraciones} iteraciones: ${resultadoPi}");
  