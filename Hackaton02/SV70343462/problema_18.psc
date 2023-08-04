Algoritmo problema_18
	
	Definir cantidad  como Entero
	Definir  PrecioTotal como Real
	Definir Ganancia como Real
	
	
	Escribir "Ingrese cantidad de CDs:"
	Leer cantidad
	
	
	Si cantidad <=9  Entonces
		PrecioTotal <- 10*cantidad
	Sino
		Si (cantidad>=10) & (cantidad<=99) Entonces
			PrecioTotal <- 8*cantidad
		SiNo    
			Si (cantidad>=100) & (cantidad<=499) Entonces
				PrecioTotal <- 7*cantidad
			Sino 
				PrecioTotal <- 6*cantidad
			FinSi
		FinSi
	Fin Si
	
	Ganancia <- PrecioTotal * 0.825
	
	Escribir "El Precio Total del Cliente: s/.", PrecioTotal
	Escribir "La ganancia del vendedor es: s/.",Ganancia
	
Fin Algoritmo