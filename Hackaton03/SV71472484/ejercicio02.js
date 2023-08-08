// 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
let respuesta = prompt("Escribir numero")

let numero = parseInt(respuesta)
if(numero < 0){
    document.write(numero + " es negativo")
}else if(numero > 0){
    document.write(numero + " es positivo")
}
else{
    document.write("No es un numero")
}