Proceso problema_06
	Definir sueldo Como Real
	Definir hora Como Entero
	
	Escribir "Ingresar horas trabajadas: "
	Leer hora
	
	Si hora <= 40 Entonces
		sueldo <- hora * 20
	SiNo
		sueldo <- hora * 25
	FinSi
	
	Escribir "Sueldo del trabajador en la semana: $", sueldo
	
FinProceso
