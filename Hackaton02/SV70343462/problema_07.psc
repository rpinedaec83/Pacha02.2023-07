Proceso problema_07
	Definir tipo Como Caracter
	Definir precioCompra, precioTotal, descuento Como Real
	
	Escribir "Ingrese el precio compra: "
	Leer precioCompra
	
	Escribir "Ingresar tipo de membresía: "
	Leer tipo
	
	
	Segun tipo Hacer
		"A":
			descuento <- precioCompra * 0.10
		"B":
			descuento <- precioCompra * 0.15
		"C":
			descuento <- precioCompra * 0.20
		De Otro Modo:
			Escribir "El tipo ingresado no existe"
	Fin Segun
	
	precioTotal <- precioCompra - descuento
	
	Escribir "Precio Total: $", precioTotal
FinProceso
