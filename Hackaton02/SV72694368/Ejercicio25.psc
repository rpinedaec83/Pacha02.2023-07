Proceso Ejercicio25
	Definir numero, factorial, x Como Real
	Escribir 'Ingresa un número: '
	leer numero
	si numero < 0 Entonces
		Escribir 'El numero ',numero,' no se puede calcular'
	SiNo
		x = 1
		factorial = 1
		Mientras x <= numero Hacer
			factorial = factorial * x
			x = x + 1
		FinMientras
		Escribir 'El factorial del número ',numero,' = ',factorial
	FinSi 

FinProceso
