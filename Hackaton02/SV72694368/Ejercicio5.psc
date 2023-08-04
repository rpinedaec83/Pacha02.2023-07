Proceso Calculadora
	Escribir 'Ingrese el numero de zapatos:'
	Leer n1
	Definir n2,resultado Como Real
	n2=n1*80
	Si n1>10 y n1<21 Entonces
		resultado <- n2-n2*0.1
	SiNo
		Si n1>20 y n1<30 Entonces
			resultado <- n2-n2*0.2
		SiNo
			Si n1>30 Entonces
				resultado <- n2-n2*0.4
			SiNo
				resultado=n2
			FinSi
		FinSi
	FinSi
	Escribir 'Total a pagar: ', resultado
FinProceso
