// 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

let numero1 = 0
let numero2 = 0
let suma = 0
let media = 0
 
while (numero1 >= 0) { 
        numero1 = dividendo = parseInt(prompt("Ingresa cualquier numero positivo \nFinaliza con un numero Negativo"))
        if (numero1 >= 0) {
            suma = suma + numero1
            numero2 = numero2 + 1
        }
        }
if (numero2 > 0) {
    media = suma/numero2
    document.write("La media es: "+ media)  
}
