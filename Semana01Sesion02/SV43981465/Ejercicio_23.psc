//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Suma_impares_menores_a_N
	Definir n,x,s,i Como Real
	Escribir "Calcular la suma de los impares menores o igual a N"
	Escribir "---------------------------------------------------"
	Escribir " "
	Escribir "Ingrese un número: "
	Leer n
	
	Para x <- 1 Hasta n con paso 1 Hacer
		si x mod 2 <> 0 Entonces
			s = s + x
			x = x + 1
		SiNo
			x = x + 1
		FinSi
	FinPara
	Escribir "La suma de números impares menores o iguales a ",n," es de: ",s
FinProceso
