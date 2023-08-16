/* 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ... */

let aprox = 3;
let actual, pre, sum = 0, stop = 0;
let signo = 1, a = 2;
pre = 0.001;

while (stop === 0) {
  actual = 4.0 / (a * (a + 1) * (a + 2)) * signo;
  sum += actual;
  
  if (Math.abs(actual) < pre) {
    stop = 1;
  }
  
  signo *= -1;
  a += 2;
}

aprox += sum;

console.log("La aproximación es:", aprox);
