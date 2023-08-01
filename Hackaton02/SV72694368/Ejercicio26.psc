Proceso Ejercicio26
	
	Definir n,d,rest,cont Como Entero
	rest = 0 
	cont = 0
	Escribir 'Numerador: '
	Leer n
	Escribir 'Denominador: '
	Leer d
	Repetir
		n = n-d
		rest = n
		cont = cont+1
	Hasta Que n<d
	Escribir 'El resto es: ',rest
	Escribir 'El cociente es: ',cont

FinProceso
