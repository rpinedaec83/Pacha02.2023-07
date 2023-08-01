Proceso Calculadora
	Escribir 'Ingrese el numero de horas trabajadas:'
	Leer n1
	Definir n2,n3,resultado Como Real
	n2=n1*20
	Si n1>40 Entonces
		n3=n1-40
		resultado <- n2+n3*5
	SiNo
		Si n1<=40 Entonces
			resultado <- n2
		SiNo
		FinSi
	FinSi
	Escribir 'Total a pagar: ', resultado
FinProceso
