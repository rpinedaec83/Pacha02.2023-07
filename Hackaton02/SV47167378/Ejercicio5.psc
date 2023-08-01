Proceso Ejercicio5
	
	Escribir " Ingrese el Numero de Zapatos que llevara:"
	leer cant 
	precio = 80
	
	
	si cant>9 y cant<20 Entonces
		costo= (cant * precio)- (cant * precio)*0.10
	SiNo
		si  cant>=20 y cant<=30 Entonces
			costo = (cant * precio)- (cant * precio)*0.20
		sino 
			si cant> 30 Entonces
				costo = (cant * precio)- (cant * precio)*0.40	
			sino 
				costo = (cant * precio)
			FinSi
		FinSi
	FinSi
	Escribir "el costo es: " costo	
FinProceso
