// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
let respuesta = prompt("Escribir numero")

let numero = parseInt(respuesta)
if(numero%10==4){
    document.write(numero + " termina en 4")
}else if(numero > 0){
    document.write(numero + " no termina en 4")
}
else{
    document.write("No es un numero")
}