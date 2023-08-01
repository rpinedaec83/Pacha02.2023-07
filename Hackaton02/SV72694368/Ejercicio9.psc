Proceso Calculadora
	Escribir 'Ingrese  sueldo del trabajador:'
	Leer n1
	Definir resultado Como Real
	Si n1>=0 Entonces
		Si n1>2000 Entonces
			Escribir 'Se le otorga un aumento del 5%'
			resultado <- n1+n1*0.05
		SiNo
			Si n1<=2000 Entonces
				resultado <- n1+n1*0.1
			FinSi
		FinSi
	SiNo
		Escribir 'Dato inválido'
	FinSi
	Escribir 'Total a pagar: ', resultado
FinProceso
