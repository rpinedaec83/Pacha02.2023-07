Proceso Tienda_De_Zapatos
	
	Definir disc, monto, total Como Entero
	
	Leer monto
	
	Si monto < 10
		disc <- 0
	SiNo
		Si monto = 10 o monto < 20
			disc <- 10
		SiNo
			si monto = 20 o monto < 30
				disc <- 20
			SiNo
				si monto = 30 o monto > 30
					disc <- 40
				FinSi
			FinSi
		FinSi
	FinSi
	
	disc <- (disc/100) * (monto * 80)
	total <- (monto * 80) - disc
	
	Escribir "El precio es,", total
FinProceso
