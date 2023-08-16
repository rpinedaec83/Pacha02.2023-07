// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

let num = parseInt(prompt("Ingrese numero entero positivo"))
let suma = 0
if (num >= 0) {  

    for (let i=1; i<=num; i++) {
		suma = suma + i; 
	} 

document.write("La suma de los n primeros numeros de "+num+" es: "+ suma) 
}
else{
    document.write("Ingrese numero positivo") 
}