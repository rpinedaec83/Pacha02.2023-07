// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

let numero = parseInt(prompt("Escribir numero del 1 al 10"))
let primo = true
      
if (numero == 0 || numero == 1 || numero == 4){ 
primo = false
}
else{
    primo = true
    for (let x = 2; x < numero / 2; x++)
    if (numero % x == 0)
    primo = false
    }

if (primo == true)
document.write(numero + " Es primo")
else
    document.write(numero + " No es primo")