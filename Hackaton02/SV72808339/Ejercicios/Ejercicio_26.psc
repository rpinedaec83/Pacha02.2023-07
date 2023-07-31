//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Proceso Ejercicio_26
	
	Definir div, dis,free, coci, res Como Entero
	Leer div
	Leer dis
	free <- div
	Repetir
		
		free <- free - dis
		coci <- coci + 1
		
	Hasta Que free - dis < 0
	
	Escribir "Resto:    ", free
	Escribir "Cociente: ", coci
	
	
FinProceso
