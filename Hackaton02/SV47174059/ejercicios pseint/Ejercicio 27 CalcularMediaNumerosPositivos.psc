Algoritmo CalcularMediaNumerosPositivos
    Definir numero, suma, contador como Entero
    Definir media como Real
	
    suma = 0
    contador = 0
	
    Escribir "Ingrese una lista de números positivos. Ingrese un número negativo para terminar."
	
    Escribir "Ingrese un número:"
    Leer numero
	
    Mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1
		
        Escribir "Ingrese un número:"
        Leer numero
    Fin Mientras
	
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los números positivos ingresados es:", media
    Sino
        Escribir "No se ingresaron números positivos."
    Fin Si
Fin Algoritmo
