//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso Ejercicio_37
	
	Leer a,b
	
	Mientras b <> 0
		
		temp <- b
		b <- a % b
		a <- temp
	FinMientras
	
	mcd <- a
	Escribir mcd
FinProceso
