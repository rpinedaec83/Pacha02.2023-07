Proceso Ejercicio_4
	
	Definir n1, n2, n3 Como Entero
	
	Leer n1,n2,n3
	
	Si n1 < n2 Y n1 < n3 Entonces
		Escribir n1
		Si n2 < n3 Entonces
			Escribir n2
			Escribir n3
		SiNo
			Escribir n3
			Escribir n2
		FinSi
	SiNo
		Si n2 < n3
			Escribir n2
			Si n1 < n3
				Escribir n1
				Escribir n3
			SiNo
				Escribir n3
				Escribir n1
			FinSi
		SiNo
			Escribir n3
			Si n1 < n2
				Escribir n1
				Escribir n2
			SiNo
				Escribir n2
				Escribir n1
			FinSi
		FinSi
	FinSi
	
FinProceso
