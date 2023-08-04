
	
	
	Funcion validar(c)
		
		Definir vocales Como caracter
		
		Definir i, j Como Entero
		
		vocales = "aeiouAEIOU"
		
		j = 0
		
		Para i = 0 Hasta 9 Con Paso 1 Hacer
			
			si c == Subcadena(vocales,i,i) Entonces
				
				j = 1
				
			FinSi
			
		FinPara
		
		si j == 1 Entonces
			
			Escribir "El caracter es una vocal"
			
		SiNo
			
			Escribir "EL caracter no es una vocal"
			
		FinSi
		
FinFuncion

Algoritmo detarea
	
	Definir letra Como Caracter
	
	Escribir "Ingresa un caracter"
	
	leer letra
	
	validar(letra)
FinAlgoritmo
