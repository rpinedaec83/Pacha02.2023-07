Proceso Aumento_Salario
	Definir salario, bonus Como Entero
	Leer salario
	Si salario < 2000 Entonces
		bonus <- 10
	SiNo
		bonus <- 5
	FinSi
	Escribir salario
	Escribir bonus
	Escribir "Aumento: ",bonus/100 * salario
	Escribir "Nuevo sueldo: ",salario + (bonus/100 * salario)
	FinProceso