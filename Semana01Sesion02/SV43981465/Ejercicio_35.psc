//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar 
// sólo veinte números.
Proceso mayor_menor_20
	Definir n,x Como Entero
	Definir i,p,mp,mi Como Real
	x = 1
	Repetir
		Escribir "Ingresar número :",x
		Leer n
		Si x == 1 Entonces
			a = n
			b = n
		SiNo
			si n > a Entonces
				a = n
			SiNo
				Si n < b Entonces
					b = n
				FinSi
			FinSi
		FinSi
		x = x + 1
	Hasta Que (x > 20)
	Escribir "El número mayor es: ",a
	Escribir "El número menor es: ",b
FinProceso
