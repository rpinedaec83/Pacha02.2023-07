Proceso Ejercicio27
	Definir n, med, cont Como Entero
	Definir i Como Real
	Escribir 'Ingrese un número: '
	Leer n
	med <- 0
	cont <- 0
	i <- 0
	Mientras (n>=0) Hacer
		Escribir 'Ingrese otro numero: '
		med <- med+n
		cont <- cont+1
		Leer n
	FinMientras
	i <- med/cont
	Escribir 'Usted ha ingresado un número negativo'
	Escribir 'La med es: ', i
FinProceso
