/* 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde. */

const dia_año = 224;
let dia_mes = 0, mes = "";
let limite = 0;

const meses = [
  { nombre: "Enero", dias: 31 },
  { nombre: "Febrero", dias: 28 },
  { nombre: "Marzo", dias: 31 },
  { nombre: "Abril", dias: 30 },
  { nombre: "Mayo", dias: 31 },
  { nombre: "Junio", dias: 30 },
  { nombre: "Julio", dias: 31 },
  { nombre: "Agosto", dias: 31 },
  { nombre: "Septiembre", dias: 30 },
  { nombre: "Octubre", dias: 31 },
  { nombre: "Noviembre", dias: 30 },
  { nombre: "Diciembre", dias: 31 },
];

for (const mes of meses) {
  limite += mes.dias;
  if (dia_año <= limite) {
    nombre_mes = mes.nombre;
    dia_mes = dia_año - (limite - mes.dias);
    break;
  }
}
console.log("El día "+dia_año+" corresponde al "+dia_mes+" de "+nombre_mes)