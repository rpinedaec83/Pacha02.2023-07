// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
let respuesta = prompt("Escribir numero")

let numero = parseInt(respuesta)
if(numero > 99 && numero < 1000){
    document.write(numero + " tiene 3 digitos")
}else{
    document.write(numero + " no tiene 3 digitos")
}