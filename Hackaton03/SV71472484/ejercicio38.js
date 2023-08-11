// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

let numero = parseInt(prompt("Ingrese un numero" ))
let suma = 0

for (let index = 1; index < numero; index++) {
  if (numero%index == 0) {
    suma = suma + index
  }    
}

if (suma == numero) {
    document.write(numero + " Es un numero perfecto")    
} else {
    document.write(numero + " No Es un numero perfecto")  
}
