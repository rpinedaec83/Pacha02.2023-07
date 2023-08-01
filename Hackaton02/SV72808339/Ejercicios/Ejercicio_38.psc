//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Proceso Ejercicio_38
	
	sum <- 0
	Leer num
	
	Para i <- 1 hasta num/2
		Si num % i == 0
			sum <- sum + i
		FinSi
	FinPara
	
	Si sum = num
		Escribir "Numero perfecto"
	SiNo
		Escribir "NO numero perfecto"
	FinSi
	
	
FinProceso
