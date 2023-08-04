//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.	
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700
//Si cumple 	se cumple la segunda condición, calcular la suma de los 4 números.

Proceso EJERCICIO20
	
	Dimension numbers[4]
	
	Para i<-1 Hasta 4
		Escribir "Escribe tu ",i," Numero"  Sin Saltar; Leer numbers[i]
		Si numbers[i] < 0
			Repetir
				Escribir "Solo numeros entero positivo"
				Escribir "N",i Sin Saltar; Leer numbers[i]
			Hasta Que numbers[i] > 0
		FinSi
	FinPara
	
	Para i<-1 Hasta 4
		
		Si numbers[i] % 2 == 0
			pares = pares + 1
		FinSi
		
	FinPara
	
	Escribir pares," numeros son pares"
	may <- 0
	Para i<-1 Hasta 4
		
		Si numbers[i] > may Entonces
			may <- numbers[i]
		FinSi
		
	FinPara
	
	Escribir may," es el mayor de todos"
	
	Si numbers[3] % 2 == 0
		
		Escribir "Cuadrado del N2: ", numbers[2]*numbers[2]
		
	FinSi
	
	Si numbers[1] < numbers[4]
		sum <- 0
		Para i<-1 hasta 4
			
			sum <- sum + numbers[i]
			
		FinPara
		Escribir "Media de los 4 numeros: ",sum/4
		Escribir "Suma de todos: ",sum
	FinSi
	
	Si numbers[2] > numbers[3]
		Si numbers[3] >= 50 y numbers[3] <= 700
			Escribir "El N3 está entre 50-700"
		SiNo
			Escribir "El N3 NO está entre 50-700"
		FinSi
	FinSi
	
	
FinProceso