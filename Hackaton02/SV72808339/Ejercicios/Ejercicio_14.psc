//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Proceso Ejercicio_14
	
	Definir num,cont Como Entero
	Leer num
	cont <- 0
	Para i <- 1 Hasta num Hacer
		
		Si num % i == 0
			cont <- cont + 1
		FinSi
	FinPara
	
	Si cont = 2 Entonces
		Escribir "primo"
	SiNo
		Escribir "no primo"
	FinSi
	
FinProceso