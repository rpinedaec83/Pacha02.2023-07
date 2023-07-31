//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso Ejercicio_23
	
	Definir num, suma Como Entero
	Leer num
	
	suma <- 0
	Para i<-0 Hasta num
		Si i % 2 <> 0
			
			suma <- suma + i
			
		FinSi
	FinPara
	Escribir suma
	
FinProceso
