//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Proceso Ejercicio_21
	
	Definir num,fact Como Entero
	Leer num
	fact <- 1
	Para i<-num Hasta 1 Con Paso -1
		fact <- fact * i
	FinPara
	Escribir "El factorial de ",num," es ",fact
	
FinProceso
