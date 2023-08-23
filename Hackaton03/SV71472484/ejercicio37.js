// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

let dato1 = 0
let dato2 = 1
let dato3 = 0

let numero1 = parseInt(prompt("Ingrese primer numero" ))
let numero2 = parseInt(prompt("Ingrese segundo numero" ))

dato3 = numero1%numero2

while (dato3 != 0) {
    dato1 = dato2
    dato2 = dato3
    dato3 = dato1%dato2    
}

document.write("El maximo comun divisor de "+ dato1 + " y " + dato2 + " es: " + dato2)