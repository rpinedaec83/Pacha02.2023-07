// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

let num = parseInt(prompt("Ingrese numero entero positivo"))
let factorial = 1
if (num >= 0) {  
if (num != 0) {
    for (let i=1; i<=num; i++) {
		factorial= factorial * i; 
	} 
}
document.write("El factorial de "+num+" es: "+ factorial) 
}
else{
    document.write("Ingrese numero positivo") 
}