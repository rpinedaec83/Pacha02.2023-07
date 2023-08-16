//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

const num = 832;

if (num < 100) {
    console.log("El número tiene MENOS de 3 dígitos.")
}
else {
    if (num > 999){
        console.log("El número tiene MÁS de 3 dígitos.")
    }
    else console.log("El número tiene 3 dígitos.")
}
