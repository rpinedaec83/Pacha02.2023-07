//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe 
//tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba 
//menos de $2000 su aumento será de un 10%.

Proceso Ejercicio_9
	
	Definir sueldo, aumento Como Entero
	Leer sueldo
	Si sueldo < 2000 Entonces
		aumento <- 10
	SiNo
		aumento <- 5
	FinSi
	
	Escribir sueldo
	Escribir aumento
	Escribir "Aumento: ",aumento/100 * sueldo
	Escribir "Nuevo sueldo: ",sueldo + (aumento/100 * sueldo)
	
FinProceso
