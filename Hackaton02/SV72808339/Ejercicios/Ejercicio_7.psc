//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra 
//a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía
//, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

Proceso Ejercicio_7
	
	Definir desc Como Entero
	Definir tipo Como Caracter
	Leer tipo
	Segun tipo
		
		"A" o "a": desc <- 10
		"B" o "b": desc <- 15
		"C" o "c": desc <- 20
		
	FinSegun
	
	Escribir desc
	
FinProceso
