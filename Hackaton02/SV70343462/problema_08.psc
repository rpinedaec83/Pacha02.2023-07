Proceso problema_08
	Definir n1, n2 , n3 Como Entero
	Definir  prome Como Real
	
	Escribir "Ingresar nota 1: "
	Leer n1
	
	Escribir "Ingresar nota 2: "
	Leer n2
	
	Escribir "Ingresar nota 3: "
	Leer n3
	
	prome <- (n1 + n2 + n3) / 3
	
	Si prome <= 10.44 Entonces
		Escribir "Su promedio es ", prome, " | Alumno esta desaprobado!"
	SiNo
		Escribir "Su promedio es ", prome, " | Alumno esta Aprobado!"
	FinSi
	
FinProceso
