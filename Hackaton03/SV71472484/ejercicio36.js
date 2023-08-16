// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

let dato1 = 0
let dato2 = 1
let dato3 = 0

let numero = parseInt(prompt("Ingrese la cantidad de terminos de la serie de Fibonacci \n que desea obtener:" ))

document.write(dato1+" ")
for (let index = 1; index < numero ; index++) {
 dato3 = dato1 + dato2
 document.write(dato3+" ")
 dato1 = dato2
 dato2 = dato3  
}