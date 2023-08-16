// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

let num = parseInt(prompt("Ingrese numero entero positivo"))
let suma = 0
if (num >= 0) {  

    for (let i=1; i<=num; i++) {
        if (i%2 != 0 ) {
            suma = suma + i;  
        } 
	} 

document.write("La suma de los n primeros numeros impares menores de "+num+" es: "+ suma) 
}
else{
    document.write("Ingrese numero positivo") 
}