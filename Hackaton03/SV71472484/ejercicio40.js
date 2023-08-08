// 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
// Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...

let num = parseInt(prompt("Ingrese la cantidad de terminos para la aproximacion de Pi:" ))
let pii = 3.0
let denominador = 0

for (let index = 1; index < num; index++) {
  denominador=(2*index+2)*(2*index+3)*(2*index+4)
  if (index%2 == 0) {
    pii=pii+4/denominador
  } else {
    pii=pii-4/denominador
  }
}
   document.write("La aproximacion de Pi con " + num + " Terminos es: " + pii)   
