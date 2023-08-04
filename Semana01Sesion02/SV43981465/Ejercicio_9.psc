// 9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que 
// si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso Aumento_sueldo
	Definir S,A,NS Como Real
	Escribir "Hola empleado, ingrese su sueldo para que sepa el aumento que tendrá el otro mes: "
	Leer S
	
	Si S > 2000 Entonces
		A = S*0.1
		NS = S + A
		Escribir "Su aumento será de $",A
		Escribir "Su nuevo sueldo será de $",NS
	SiNo
		A = S*0.05
		NS = S + A
		Escribir "Su aumento será de $",A
		Escribir "Su nuevo sueldo será de $",NS
	FinSi
FinProceso
