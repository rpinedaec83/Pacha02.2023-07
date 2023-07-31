Algoritmo TiendaDeHelados
    Definir tipoMembresia como Caracter
    Definir totalCompra, descuento, totalPagar como Real
	
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
	
    Escribir "Ingrese el monto total de la compra:"
    Leer totalCompra
	
    segun tipoMembresia hacer
        "A":
            descuento = 0.10
        "B":
            descuento = 0.15
        "C":
            descuento = 0.20
        De Otro Modo:
            Escribir "Tipo de membresía inválido. No se aplicará descuento."
            descuento = 0
    Fin Segun
	
    totalPagar = totalCompra * (1 - descuento)
	
    Escribir "Total a pagar con descuento:", totalPagar
Fin Algoritmo

