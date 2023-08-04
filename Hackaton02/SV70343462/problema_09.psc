Proceso problema_09
	Definir sueldo, sueldofinal Como Real
	
	Escribir "Ingresar sueldo: "
	Leer sueldo
	
	Si sueldo > 2000 Entonces
		aumento <- sueldo * 0.05
		sueldofinal <- sueldo + aumento
	SiNo
		aumento <- sueldo * 0.10
		sueldofinal <- sueldo + aumento
	FinSi
	
	Escribir "Sueldo del Trabajor: s/.", sueldo
	Escribir "Aumento por meta lograda: s/.", aumento
	Escribir "Sueldo + comisión Final: s/." , sueldofinal
FinProceso
