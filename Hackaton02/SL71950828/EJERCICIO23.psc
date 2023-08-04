//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso EJERCICIO23
	
	Definir num, suma Como Entero
	Escribir "Escribe un numero: "
	Leer num
	
	suma <- 0
	Para i<-0 Hasta num
		Si i % 2 <> 0
			
			suma <- suma + i
			
		FinSi
	FinPara
	Escribir "La suma de los n primeros numeros impares menores de ", num," es: ", suma
	
FinProceso