//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos
//se debe acabar el programa al ingresar un número negativo.

Proceso Ejercicio_27
	
	Repetir
		
		Leer num
		Si num > 0
			sum <- sum + num
			cont <- cont + 1
		FinSi
	Hasta Que num < 0 
	
	Escribir redon(sum/cont)
	
FinProceso
