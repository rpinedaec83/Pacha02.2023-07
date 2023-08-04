Proceso Ejercicio18
	
	
	escribir "Ingrese la cantidad a Comprar:"
	leer cant
	
	Si cant <= 9 Y cant >= 1 Entonces
		Precio = cant * 10
		Ganancia = precio * 0.0825
		Escribir "Precio total para cliente: " precio
		Escribir "Ganancia para el Vendedor: " Ganancia 
	sino 
		si cant <= 99 y cant >=10 Entonces
			Precio = cant * 8
			Ganancia = precio * 0.0825
			Escribir "Precio total para cliente: " precio
			Escribir "Ganancia para el Vendedor: " Ganancia 
	sino 
		si 	cant <= 499 y cant >=100 Entonces
			Precio = cant * 7
			Ganancia = precio * 0.0825
			Escribir "Precio total para cliente: " precio
			Escribir "Ganancia para el Vendedor: " Ganancia 
	SiNo
		si cant > 500 Entonces
			Precio = cant * 6
			Ganancia = precio * 0.0825
			Escribir "Precio total para cliente: " precio
			Escribir "Ganancia para el Vendedor: " Ganancia 
		sino 
			Escribir " Operacion Incorrecta"
		fin si 	
			
		fin si 	
			
		FinSi
		
	
	FinSi
	
	
FinProceso
