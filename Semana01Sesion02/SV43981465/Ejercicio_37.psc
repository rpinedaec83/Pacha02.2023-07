//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso MDC_Euclides
	Definir a,b,r,ma,me Como Entero
	Escribir "Ingresar el valor de a: "
	Leer a
	Escribir "Ingresar el valor de b: "
	Leer b
	
	Si a > b Entonces
		ma = a
		me = b
	SiNo
		ma = b
		me = a
	FinSi
	
	Mientras me <> 0 Hacer
		r = ma mod me
		ma = me
		me = r
	FinMientras
	Escribir "El M.C.D. de ",a," y ",b," es: ",ma
FinProceso
