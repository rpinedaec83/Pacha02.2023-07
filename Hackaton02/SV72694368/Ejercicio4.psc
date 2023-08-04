Proceso Ejercicio1
	definir a,b,c como entero
	definir aux como entero
	
	Escribir "Ingresa tres numeros:"
	Leer a,b,c
	Repetir
		Si a>b Entonces
			aux=a
			a=b
			b=aux
		FinSi
		Si b>c Entonces
			aux=b
			b=c
			c=aux
		FinSi	
	Hasta Que a<b y b<c 
	Escribir "Números ordenados de menor a mayor:"
	Escribir a
	Escribir b
	Escribir c
	
FinProceso
