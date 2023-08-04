Proceso calculadora
	Escribir "Select your operation"
	Escribir "1 to +"
	Escribir "2 to -"
	Escribir "3 to x"
	Escribir "4 to /"
	n1 = 0
	n2 = 0
	n3 = 0
	n4 = 0
	op = 0
	resultado = 0
	Leer op
	Escribir "Escribe el primer numero"
	leer n1
	Escribir "Escribe el segundo numero"
	leer n2
	si op == 1 Entonces
		resultado = n1 + n2
	FinSi
	si op == 2 Entonces
		resultado = n1 - n2
	FinSi
	si op == 3 Entonces
		resultado = n1 * n2
	FinSi
	si op == 4 Entonces
		resultado = n1 / n2
	FinSi
	Escribir "El resultado es " resultado
	
	
	
FinProceso
