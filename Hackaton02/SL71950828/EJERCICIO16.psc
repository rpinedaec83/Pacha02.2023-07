// Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso EJERCICIO16
	Definir num Como Entero
	Escribir "Ingrese un número del 1 al 7:"
    Leer num
	
	Segun num Hacer
		1:
			Escribir "Corresponde al dia Lunes"
		2:
			Escribir "Corresponde al dia Martes"
		3:
			Escribir "Corresponde al dia Miercoles"
		4:
			Escribir "Corresponde al dia Jueves"
		5:
			Escribir "Corresponde al dia Viernes"
		6:
			Escribir "Corresponde al dia Sabado"
		7:
			Escribir "Corresponde al dia Domingo"
		De Otro Modo:
			Escribir "Dia no valido"
	FinSegun
FinProceso
