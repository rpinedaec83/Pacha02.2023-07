//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Serie_Fibonacci
	Definir n,a,b,c Como Entero
	a = 0
	b = 1
	Escribir "Ingrese el valor de n: "
	Leer n
	Escribir "Los primeros ",n," números de la serie Fibonacci son: "
	
	Para i = 1 Hasta n Con Paso 1 Hacer
		Escribir a
		c = b + a
		a = b
		b = c
	FinPara
	
FinProceso
