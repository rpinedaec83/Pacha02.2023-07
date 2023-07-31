//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Numero_perfecto
	Definir n,sd Como Entero
	Escribir "Ingrese un número: "
	Leer n
	sd = 0
	
	Para i = 1 Hasta n/2 Con Paso 1 Hacer
		Si n mod i = 0 Entonces
			sd = sd + i
		FinSi
	FinPara
	
	Si sd = n Entonces
		Escribir n," es un número perfecto"
	SiNo
		Escribir n," no es un número perfecto"
	FinSi
FinProceso
