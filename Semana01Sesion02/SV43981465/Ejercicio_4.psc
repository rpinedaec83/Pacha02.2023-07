// 4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Menos_a_Mayor
	Escribir "Ordenar tres números de menor a mayor"
	Escribir "-------------------------------------"
	Definir n,x,a,b,c Como Entero
	Escribir "Ingrese 3 números: "
	
	Para x = 1 hasta 3 Con Paso 1 Hacer
		Leer n
		Si x == 1 Entonces
			a = n
		FinSi
		Si x == 2 Entonces
			Si a < n Entonces
				b = a
				a = n
			SiNo
				b = n
			FinSi
		FinSi
		Si x == 3 Entonces
			Si a < n Entonces
				c = b
				b = a
				a = n
			SiNo
				Si b < n Entonces
					c = b
					b = n
				SiNo
					c = n
				FinSi
			FinSi
		FinSi
	FinPara
	
	Escribir c
	Escribir b
	Escribir a
		
FinProceso
