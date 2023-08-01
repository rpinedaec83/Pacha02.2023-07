Algoritmo CalcularFactorial
    Definir numero, factorial como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "El número debe ser positivo."
    Sino
        factorial = 1
        i = 1
		
        Mientras i <= numero Hacer
            factorial = factorial * i
            i = i + 1
        Fin Mientras
		
        Escribir "El factorial de", numero, "es:", factorial
    Fin Si
Fin Algoritmo
