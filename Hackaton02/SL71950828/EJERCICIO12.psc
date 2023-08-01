//Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso EJERCICIO12
	
	Definir num1, num2 Como Entero
	Escribir "Escribe un numero "
	Leer num1
	Escribir "Escribe tu segundo numero"
	Leer num2
	
	
	Si num1 > num2  Entonces
		mayornumer <- num1
	SiNo
		mayornumer <- num2
		
	FinSi
	Escribir "El numero mayor es: " mayornumer
FinProceso