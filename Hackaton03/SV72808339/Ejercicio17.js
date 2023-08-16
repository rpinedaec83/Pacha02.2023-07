/* 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo. */

let hora = 12;
let min = 23;
let seg = 59;

seg += 1;
if (seg === 60) {
  seg = 0;
  min += 1;
  if (min === 60) {
    min = 0;
    hora += 1;
    if (hora === 24) {
      hora = 0;
    }
  }
}

const H = hora.toString().padStart(2, "0");
const M = min.toString().padStart(2, "0");
const S = seg.toString().padStart(2, "0");

console.log("La hora después de un segundo:",`${H}:${M}:${S}`);