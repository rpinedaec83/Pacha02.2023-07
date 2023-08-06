// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante 
// aprobó o no.

function calcularPromedioYEstado(nota1, nota2, nota3){
    const promedio = (nota1 + nota2 + nota3)/3;
    const notaMinimaAprobacion = 13;

    if(promedio > notaMinimaAprobacion){
        return {promedio: promedio, estado: 'Aprobado'};
    }else{
        return {promedio: promedio, estado: 'Desaprobado'};
    }
}

let nota1 = parseInt(prompt("Ingrese primera nota:"));
let nota2 = parseInt(prompt("Ingrese segunda nota:"));
let nota3 = parseInt(prompt("Ingrese tercera nota:"));

const resultado = calcularPromedioYEstado(nota1, nota2, nota3);
alert("El promedio de nota es de "+resultado.promedio.toFixed(2));
alert("Usted está "+resultado.estado);
