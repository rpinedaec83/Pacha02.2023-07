//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso Suma_pares_1000
	Definir x,p,n Como Entero
	n = 1000
	Para x <- 0 Hasta n con paso 1 Hacer
		si x mod 2 <> 0 Entonces
			Escribir "numero :",x
			x = x + 1
		SiNo
			Escribir "numero :",x
			p = p + x
			x = x + 1
		FinSi
	FinPara
	Escribir "La suma de los pares es ",p
FinProceso
