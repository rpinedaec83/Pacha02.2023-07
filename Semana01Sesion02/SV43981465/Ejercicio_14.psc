//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.
Proceso Diez_primos
	Definir x,n,c Como Entero
	
	Para n = 1 hasta 10 Hacer
		x = 1
		c = 0
		Mientras x <= n Hacer
			si n mod x == 0 Entonces
				c = c + 1
			FinSi
			x = x + 1
		FinMientras
		si c == 2 Entonces
			Escribir "El número ",n," es primo"
		FinSi
	FinPara
FinProceso
