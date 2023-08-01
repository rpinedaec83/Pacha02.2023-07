//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe 
//tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba 
//menos de $2000 su aumento será de un 10%.
Proceso EJERCICIO9
	
	Definir sueldo, aumento Como Entero
	Escribir "¿Cual es tu sueldo?"
	Leer sueldo
	Si sueldo < 2000 Entonces
		aumento <- 10
	SiNo
		aumento <- 5
	FinSi
	nuevosuel <- (aumento/100 * sueldo) + sueldo
	
	Escribir "Tu sueldo anterior fue ",sueldo ,",Tienes un aumento del " ,aumento ,"% "
	Escribir "Tu Nuevo sueldo seria " nuevosuel
FinProceso