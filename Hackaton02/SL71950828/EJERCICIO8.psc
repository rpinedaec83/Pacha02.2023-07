//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Proceso EJERCICIO8
    Definir nota1, nota2, nota3, promedio como REAL
	
    Escribir "Ingrese la primera nota:"
    Leer nota1
	
    Escribir "Ingrese la segunda nota:"
    Leer nota2
	
    Escribir "Ingrese la tercera nota:"
    Leer nota3
	
    promedio = trunc(nota1 + nota2 + nota3) / 3
	
    Escribir "El promedio es:", promedio
	
    Si promedio >= 11 Entonces
        Escribir "El estudiante ha aprobado."
    Sino
        Escribir "El estudiante ha reprobado."
    Fin Si
FinProceso
