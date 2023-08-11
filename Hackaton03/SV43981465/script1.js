// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

let respuesta = prompt("Escriba el numero")

let numero = parseInt(respuesta)
if(numero > 99 && numero < 1000){
    alert("tiene 3 digitos")
}else{
    alert("no tiene 3 digitos")
}