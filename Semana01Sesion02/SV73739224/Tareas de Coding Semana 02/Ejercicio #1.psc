Algoritmo  Determinar_si_numero_entero_tiene_tres_digitos
	Definir num Como Entero
	Escribir "Digita un número entero"
	Leer num
	si num < 0
		num = num*(-1)
	FinSi
	Si num >= 100 y num <= 999
		escribir "El numero entero digitado si tiene tres digitos"
	SiNo
		Escribir "El numero entero digitado no tiene tres digitos"
	FinSi
	FinAlgoritmo
