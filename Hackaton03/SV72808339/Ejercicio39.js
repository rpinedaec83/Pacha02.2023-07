/* 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con 
la serie de Gregory-Leibniz. La formula que se debe aplicar es:

Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ... */

let den = 1;
let pid = 0;
const num = 1000;

for (let i = 0; i < num; i++) {
  if (i % 2 === 0) {
    pid += 4 / den;
  } else {
    pid -= 4 / den;
  }
  den += 2;
}

console.log("La aproximación es:", pid);
