Proceso Ejercicio31
	
	Definir cont,cont1,cont2 Como Entero
	Definir n,sum1,sum2,med1,med2 Como Real
	cont = 0 
	cont1 = 0 
	cont2 = 0
	sum1 = 0 
	sum2 = 0
	med1 = 0 
	med2 = 0

	Repetir
		Leer n
		Si (n>0) Entonces
			sum1 = sum1+n
			cont1 = cont1+1
		SiNo
			sum2 = sum2+n
			cont2 = cont2+1
		FinSi
		cont = cont+1
	Hasta Que cont=10
	med1 = sum1/cont1
	med2 = sum2/cont2
	Escribir 'La media de los números positivos es: ',med1
	Escribir 'La media de los números negativos es: ',med2


FinProceso
