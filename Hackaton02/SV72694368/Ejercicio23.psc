Proceso Ejercicio23
	Definir n, pares, impares como entero
	Escribir "Ingresa el total de números"
	Leer n
	pares = 0
	impares = 0
	Mientras n > 0 Hacer
		Si n mod 2 <> 0 Entonces
			impares = impares + n
		FinSi
		n = n - 1
	FinMientras
	Escribir "La suma de los numeros impares es: ",impares

FinProceso
