Proceso Ejercicio7
	
	escribir " Ingrese la cantidad a Pagar: "
	leer cant 
	escribir "Ingrese el tipo de menbresia "
	Escribir " 1 para tipo A "
	Escribir " 2 para tipo B "
	Escribir " 3 para tipo C "
	leer op 
	
	segun op Hacer
		1: 
			Precio = cant - (cant*0.10) 
		2:
			Precio = cant - (cant*0.15) 
		3:
			Precio = cant - (cant*0.20) 
	FinSegun
	
	Escribir " Ustede debe Pagar: " Precio 
FinProceso
