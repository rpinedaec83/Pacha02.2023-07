Proceso El_Salario
	Definir salario, hrs Como Entero
	Leer hrs
	Si hrs < 40 o hrs = 40 Entonces
		salario <- hrs * 20
	SiNo
		salario <- ( (hrs-40) * 25 ) + (40 * 20)
	FinSi
	
	Escribir salario
FinProceso
