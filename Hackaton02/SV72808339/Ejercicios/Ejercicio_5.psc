Proceso Ejercicio_5
	
	Definir cant, desc, total Como Entero
	Leer cant
	Si cant < 10
		desc <- 0
	SiNo
		Si cant = 10 o cant < 20
			desc <- 10
		SiNo
			Si cant = 20 o cant < 30 
				desc <- 20
			SiNo
				Si cant = 30 o cant > 30 
					desc <- 40
				FinSi
			FinSi
		FinSi
	FinSi

	desc <- (desc/100) * (cant * 80)
	total <- (cant * 80) - desc
	
	Escribir total
FinProceso
