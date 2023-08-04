Algoritmo problema_27
    Definir num, suma, cantidad Como Real
    suma <- 0
    cantidad <- 0
	
    Escribir "Ingrese números positivos para calcular la media."
    Escribir "Ingrese un número negativo para terminar la entrada."
	Escribir "Ingrese un número:"
	
    Repetir
        Leer num
		
        Si num >= 0 Entonces
            suma <- suma + num
            cantidad <- cantidad + 1
        FinSi
		
    Hasta Que num < 0
	
    Si cantidad > 0 Entonces
        media <- suma / cantidad
        Escribir "La media de los números ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
	
FinAlgoritmo
