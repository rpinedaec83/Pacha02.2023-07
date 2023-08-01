
// Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes 
// con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:				
//  Tipo A 10% de descuento
//	Tipo B 15% de descuento
//	Tipo C 20% de descuento
Proceso EJERCICIO7
		
		Definir precio, total, descuento Como Entero
		Definir mem, desme Como Caracter
		
		Escribir "Ingrese el precio del helado: "
		Leer precio
		
		Escribir "Ingrese el tipo de membresía (A, B o C): "
		Leer mem
		mem <- Mayusculas(mem)
		Segun mem Hacer
			"A":
				descuento = precio * 0.1
				desme = '10%'
			"B":
				descuento = precio * 0.15
				desme = '15%'
			"C":
				descuento = precio * 0.2
				desme = '20%'
			De Otro Modo:
				Escribir "Tipo de membresia no valida"
		FinSegun
		
		Si descuento > 0 Entonces
			total = precio - descuento
			Escribir "Descuento por membresia: ", desme
			Escribir "Total con descuento:    $", total
		FinSi
		
FinProceso
