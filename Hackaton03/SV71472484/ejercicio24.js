// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

let num = 100
let suma = 0
    for (let i=1; i<=num; i++) {
        if (i%2 == 0 ) {
            suma = suma + i;  
        } 
	} 
document.write("La suma de los n primeros numeros impares menores de "+num+" es: "+ suma) 
