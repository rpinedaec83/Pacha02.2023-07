Proceso problema_05
	Definir descuento, impCompra, impTotal, precio, cantidad Como Real
	
	precio <- 80
	
	Escribir "Ingresar cantidad: "
	Leer cantidad
	
	impCompra <- cantidad * precio
	
	si cantidad > 10 Entonces
		impTotal <- impCompra * 0.10
			si cantidad > 20 & cantidad < 30 Entonces
				impTotal <- impCompra * 0.20
					SiNo
						si cantidad > 30 Entonces
							impTotal <- impCompra * 0.30
						FinSi
			FinSi
	SiNo
		impTotal <- impCompra
	FinSi
	
	Escribir "Importe Total: ", impTotal
	
FinProceso
