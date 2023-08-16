// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

let nota1 = parseInt(prompt("Ingrese Nota 1:"))
let nota2 = parseInt(prompt("Ingrese Nota 2:"))
let nota3 = parseInt(prompt("Ingrese Nota 3:"))

let promedio = Math.round((nota1 + nota2 + nota3) / 3)

document.write("Promedio : "+promedio+"<br>")

if (promedio >= 13) {
    document.write("Estudiante APROBADO")  
} else {
    document.write("Estudiante NO APROBADO")  
}
