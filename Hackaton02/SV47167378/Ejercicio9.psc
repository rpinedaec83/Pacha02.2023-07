Proceso Ejercicio9
	
	escribir "Ingrese su Salario Actual: "
	Leer Sal
	
	si sal > 2000 Entonces
		aumento = sal*0.05
		Sueldo= sal + aumento
	SiNo
		aumento = sal*0.10 
		Sueldo= sal + aumento
	FinSi
	
	Escribir "el Aumento es de:" aumento " y su nuevo Salario es de: " Sueldo
FinProceso
