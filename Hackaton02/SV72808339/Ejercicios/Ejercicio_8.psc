//Hacer un algoritmo en Pseint para calcular el promedio de 
//tres notas y determinar si el estudiante aprobó o no.

Proceso Ejercicio_8
	
	Definir n1,n2,n3 Como Entero
	Definir nota Como Real
	Leer n1,n2,n3
	
	nota <- (n1+n2+n3)/3
	
	Si nota > 11 o nota = 11 Entonces
		
		Escribir "El alumno ha aprobado!"
	SiNo
		Escribir "El alumno NO ha aprobado"
		
	FinSi
	
FinProceso
