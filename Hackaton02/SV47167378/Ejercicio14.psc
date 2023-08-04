Proceso Ejercicio14
	
	cont=0
	Escribir "INgrese un numero"
	leer num

	
	para  x = 1 Hasta num Con Paso 1 hacer
		
		si num mod x == 0 Entonces
		cont = cont + 1
		FinSi
		
	Fin Para             
	
	Si cont == 2 Entonces
		Escribir "El numero ",num," es primo"
		
	SiNo
		
		Escribir "El numero ",num," no es primo"
	FinSi
	
	
	
FinProceso
