/* 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
*/
const n1 = 12, n2 = 15, n3 = 11,corte = 11;
let nota_final = 0;

nota_final = (n1+n2+n3) / 3

if (nota_final>corte){
    console.log("El alumno APROBÓ.")
} else{
    console.log("El alumno NO aprobó.")
}