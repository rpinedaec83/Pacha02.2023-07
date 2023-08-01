//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso  EJERCICIO33
	Definir respuesta como caracter
	
	Repetir
        Escribir "¿Desea continuar con el programa? (si/no)"
        Leer respuesta
		Si respuesta == "si" o respuesta =="no" Entonces
			Segun respuesta Hacer
				"si":
					Escribir "El programa seguira ejecutandose..."
				"no":
					Escribir "El programa termino"
			FinSegun
		SiNo
			Escribir "Respuesta no valida. Intente otra vez."	
		FinSi
	Hasta Que respuesta == "no"	
	
FinProceso
