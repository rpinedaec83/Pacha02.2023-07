// 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...


let num = parseInt(prompt("Ingrese la cantidad de terminos para la aproximacion de Pi:" ))
let pii = 0
let aproximacion = 0


for (let index = 1; index <= num; index++) {
  pii = 4/(2 * index - 1)
  if (index%2 == 0) {
    aproximacion = aproximacion - pii
  } else {
    aproximacion = aproximacion + pii
  }
}
   document.write("La aproximacion de Pi con " + num + " Terminos es: " + aproximacion)    