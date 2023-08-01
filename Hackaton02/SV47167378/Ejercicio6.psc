Proceso Ejercicio6
	
	Escribir "Cuantas Horas Trabajo: "
	leer horas 
	
	si horas <= 40 Entonces
		Sueldo = horas * 20
	sino 
		si horas > 40 Entonces
			n1=horas - 40
			Sueldo= (40*20) + n1* 25 
		FinSi
	FinSi
	Escribir " Su salario es : " Sueldo 
FinProceso
