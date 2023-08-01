// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
Proceso Numero_tres_digitos
	Definir n Como Entero
	Escribir "Algoritmo que determinará si su número es de tres dígitos"
	Escribir "---------------------------------------------------------"
	Escribir "Ingrese un número: "
	Leer n
	
	Si n > 99 y n < 1000 Entonces
		Escribir "El número ",n," es de tres dígitos"
	SiNo
		Escribir "El número ",n," no es de tres dígitos"
	FinSi
	
FinProceso
