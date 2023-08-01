//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso factorial
	Definir n,x,f como real
	Escribir "Calcular el factorial de un número"
	Escribir "----------------------------------"
	Escribir " "
	Escribir "Ingrese un número: "
	Leer n
	
	Si n < 0 Entonces
		Escribir "El número ",n," no se puede calcular el factorial"
	SiNo
		x = 1
		f = 1
		Mientras x <= n Hacer
			f = f*x
			x = x+1
		FinMientras
		Escribir "El factorial de ",n," es: ",f
	FinSi
FinProceso
