// 8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Promedio_notas
	Definir a,b,c,R Como Real
	Escribir "Alumno, ingrese sus tres notas para saber si aprobó o no el curso."
	Escribir "Nota 1:"
	Leer a
	Escribir "Nota 2:"
	Leer b
	Escribir "Nota 3:"
	Leer c

	R = (a + b + c) / 3
	
	Si R > 13 Entonces
		Escribir "¡Aprobado!, su promedio de nota es ",R
	SiNo
		Escribir "¡No aprobado!, su promedio de nota es ",R
	FinSi
FinProceso
