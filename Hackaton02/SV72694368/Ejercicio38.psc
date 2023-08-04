Proceso Ejercicio38
	
	Definir n1,cont,cant,sum,rest Como Entero
	Escribir 'Ingrese un número'
	Leer n1
	cont = 0
	cant = 0
	Mientras (n1<>cont) Hacer
		cont = cont+1
		Si (cont<>n1) Entonces
			rest= n1 MOD cont
			Si (rest=0) Entonces
				cant = cant+cont
			FinSi
		SiNo
			cont = n1
		FinSi
	FinMientras
	Escribir 'Sum de los divisores: ',cant
	Si (n1=cant) Entonces
		Escribir 'El número ingresado es perfecto'
	SiNo
		Escribir 'El número ingresado no es perfecto'
	FinSi

FinProceso
