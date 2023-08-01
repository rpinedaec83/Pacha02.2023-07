//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
// se debe acabar el programa al ingresar un número negativo.
Proceso EJERCICIO27
	Definir num1 Como Entero
	Definir num2, suma Como Real
	num1 = 0
	num2 = 1
	suma = 0
	Mientras num1 >= 0 Hacer
		Escribir "Ingresa cualquier numero positivo"
		Escribir "Finaliza con un numero Negativo"
		Leer num1
		si num1 >= 0 Entonces
			suma = suma + num1
			num2 = num2 + 1
		FinSi
	FinMientras
	si num2 > 0 Entonces
		Escribir "La media es: " suma/num2
	FinSi
FinProceso
