//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso Suma_n_numeros
	Definir n,x,s Como Real
	Escribir "Calcular la suma de los n primeros números"
	Escribir "------------------------------------------"
	Escribir " "
	Escribir "Ingrese un número: "
	Leer n
	
	x = 1
	Mientras x <= n Hacer
		s = s + x
		x = x + 1
	FinMientras
	Escribir "La suma de los ",n," primeros números es: ",s
FinProceso
