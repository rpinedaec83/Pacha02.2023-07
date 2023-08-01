Proceso Calculadora
	Escribir "Escoge tipo de membresia"
	Escribir "A / B / C "
	Definir op Como Caracter
	leer op
	si op=="A"  o op=="a" o op=="B" o op=="b" o op=="C" o op=="c" Entonces
		si op=="A" o op=="a" Entonces
			Escribir "Tiene un descuento del 10%"
		SiNo
			si op=="B" o op=="b" Entonces
				Escribir "Tiene un descuento del 15%"
			SiNo
				si op=="C" o op=="c" Entonces
					Escribir "Tiene un descuento del 20%"
				FinSi
			FinSi
		FinSi
	SiNo
		
	Escribir "Dato inválido"	
		
	FinSi
	
	

	
FinProceso
