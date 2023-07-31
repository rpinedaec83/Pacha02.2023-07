// 34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.
Algoritmo ejercicio34
	Escribir("Tabla de multiplicar del 1 al 9:")
	
	Para i = 1 Hasta 9 Con Paso 1 Hacer
		Escribir("")
		Escribir "Tabla del numero ", i, ":"
		Escribir("----------------------")
		Para j = 1 Hasta 10 Con Paso 1 Hacer
			resultado = i * j
			Escribir i, " x ", j, " = ", resultado
		FinPara
	FinPara
	
FinAlgoritmo

