Algoritmo TiendaDeZapatos
    Definir cantidadZapatos, precioUnitario, descuento, totalPagar como Entero
	
    precioUnitario = 80
	
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidadZapatos
	
    Si cantidadZapatos > 10 Entonces
        Si cantidadZapatos >= 30 Entonces
            descuento = 40
        Sino
            Si cantidadZapatos >= 20 Entonces
                descuento = 20
            Sino
                descuento = 10
            Fin Si
        Fin Si
    Sino
        descuento = 0
    Fin Si
	
    totalPagar = cantidadZapatos * precioUnitario * (100 - descuento) / 100
	
    Escribir "Total a pagar con descuento:", totalPagar
Fin Algoritmo

