Proceso Ejercicio11
	
	
	Definir  n1, n2, n3 Como Entero
	
	Escribir "Ingrese primer numero:"
	Leer num1
	Escribir "Ingrese segundo numero:"
	Leer num2
	Escribir "Ingrese tercero numero:"
	Leer num3
	
	si num1 > num2 y num1 > num3 Entonces
		n1 = num1
	sino 
		si num2 > num1 y num2 > num3 Entonces
			n1 = num2
		sino 
			n1 = num3
		finsi 
	FinSi
	
	Escribir "El Numero mayor es: "  n1
FinProceso
