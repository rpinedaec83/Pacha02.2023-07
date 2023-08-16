// 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

let num = parseInt(prompt("Ingrese numero entero positivo"))
let factorial = num
let numero = num
if (num >= 0) {  
if (num != 0) {
    while (num > 1) { 
        num--;
        factorial = factorial * num;
        }
}
document.write("El factorial de "+numero+" es: "+ factorial) 
}
else{
    document.write("Ingrese numero positivo") 
}
