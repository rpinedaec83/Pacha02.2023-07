Algoritmo CalcularFactorial
    Definir numero, factorial como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "El número debe ser positivo."
    Sino
        factorial = 1
		
        Para i <- 1 hasta numero Hacer
            factorial = factorial * i
        Fin Para
		
        Escribir "El factorial de", numero, "es:", factorial
    Fin Si
Fin Algoritmo
