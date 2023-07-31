Algoritmo CalcularRestoCociente
    Definir dividendo, divisor, cociente, resto como Entero
	
    Escribir "Ingrese el dividendo:"
    Leer dividendo
	
    Escribir "Ingrese el divisor:"
    Leer divisor
	
    Si divisor = 0 Entonces
        Escribir "Error: No se puede dividir entre cero."
    Sino
        cociente = 0
        resto = dividendo
		
        Mientras resto >= divisor Hacer
            resto = resto - divisor
            cociente = cociente + 1
        Fin Mientras
		
        Escribir "El cociente es:", cociente
        Escribir "El resto es:", resto
    Fin Si
Fin Algoritmo

