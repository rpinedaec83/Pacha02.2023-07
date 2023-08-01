Proceso Ejercicio35
	Definir i, cont Como Entero
	Definir max, min, n1 Como Real
	Escribir 'Ingrese n1:'
	Leer n1
	max <- n1
	min <- n1
	cont <- 2
	Para i<-1 Hasta 19 Hacer
		Escribir 'Ingrese n', cont, ' :'
		Leer n1
		Si (n1>max) Entonces
			max <- n1
		FinSi
		Si (n1<min) Entonces
			min <- n1
		FinSi
		cont <- cont+1
	FinPara
	Escribir 'El número menor es: ', min
	Escribir 'El número mayor es: ', max
FinProceso
