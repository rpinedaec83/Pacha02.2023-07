Proceso Ejercicio39
	
	Definir i, n1, cont como entero
	Definir p_i como real
	p_i = 0
	cont = 0
	
	Escribir "Ingrese un número"
	Escribir "Para calcular la sucesión de pi"
	Leer n1
	
	para i =1 hasta n1 Con Paso 2 hacer
		
		si (cont mod 2 = 0) Entonces
			p_i = p_i + (4 / i)
		SiNo
			p_i = p_i - (4/ i)
		FinSi
		cont = cont + 1
		
	FinPara
	
	Escribir "Pi se aproxima a: ", p_i



FinProceso
