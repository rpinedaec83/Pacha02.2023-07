//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso Poblacion
	Definir var Como Entero
	Definir dato Como Caracter
	var = 1
	Mientras var = 1 Hacer
		Escribir "El programa está en ejecución..."
		Escribir "¿Deseas continuar? (si/no)"
		Leer dato
		Si dato == "si"
			var = 1
		SiNo
			var = 0
		FinSi
	FinMientras
FinProceso
