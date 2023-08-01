//10. Hacer un algoritmo en Pseint que diga si un número es par o impar.
Proceso Par_o_impar
	Definir n Como Entero
	Escribir "Identificar si el número es par o impar"
	Escribir "---------------------------------------"
	Escribir " "
	Escribir "Ingrese el número a evaluar: "
	Leer n
	
	Si n mod 2 == 0 Entonces
		Escribir "El número ",n," es par"
	SiNo
		Escribir "El número ",n," es impar"
	FinSi
FinProceso
