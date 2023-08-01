Proceso Ejercicio19
	
	escribir "Ingresar Codigo : "
	Escribir  "10 Cajero"
	Escribir  "20 Servidor "
	Escribir  "30 Preparador "
	Escribir  "40 Mantenimiento "
	leer opc
	
	segun opc Hacer
		10:
			Escribir "Ingresar Dias de trabajo"
			leer dias
			si dias < 7 Entonces
				Sueldo = dias * 56
				Escribir "Su sueldo es : " Sueldo
			sino 
				escribir "Error en Operacion"
				
			FinSi
			
		20: 
			Escribir "Ingresar Dias de trabajo"
			leer dias
			si dias < 7 Entonces
				Sueldo = dias * 64
				Escribir "Su sueldo es : " Sueldo
			sino 
				escribir "Error en Operacion"
				
			FinSi
			
		30:
			Escribir "Ingresar Dias de trabajo"
			leer dias
			si dias < 7 Entonces
				Sueldo = dias * 80
				Escribir "Su sueldo es : " Sueldo
			sino 
				escribir "Error en Operacion"
				
			FinSi
			
		40:
			Escribir "Ingresar Dias de trabajo"
			leer dias
			si dias < 7 Entonces
				Sueldo = dias * 48
				Escribir "Su sueldo es : " Sueldo
			sino 
				escribir "Error en Operacion"
				
			FinSi
			
		De Otro Modo:
			Escribir " opcion errada "
			
			
	FinSegun
	
	
FinProceso
