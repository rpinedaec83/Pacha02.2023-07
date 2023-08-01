//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Proceso EJERCICIO11
	
	Definir num1, num2, num3 Como Entero
	Escribir "Escribe un numero "
	Leer num1
	Escribir "Escribe tu segundo numero"
	Leer num2
	Escribir" Escribe tu tercer numero"
	Leer num3
	
	Si num1 > num2 y num1 > num3 Entonces
		mayornumer <- num1
	SiNo
		Si num2 > num3
			mayornumer <- num2
		SiNo
			mayornumer <- num3
		FinSi
	FinSi
	Escribir "El numero mayor es: " mayornumer
FinProceso