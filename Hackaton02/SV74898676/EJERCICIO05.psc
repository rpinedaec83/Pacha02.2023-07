//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento 
//para vender al mayor, esta dependerá del número de zapatos que se compren. 
//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número 
//de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si 
//son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Funcion precio <- CalcularPago(cantZap, precZap) 
	
	Definir totalCompra Como Entero;
	
	totalCompra <- cantZap * precZap;
	
	Si cantZap > 10
		precio <- totalCompra - ((totalCompra * 10) / 100)
	SiNo

		Si cantZap > 20 Y cantZap <= 30
			precio <- totalCompra - ((totalCompra * 20) / 100)
		SiNo
			
			Si cantZap >= 30
				precio <- totalCompra - ((totalCompra * 40) / 100)
				
			SiNo
				
				precio <- totalCompra;
			FinSi
		FinSi
	FinSi
	
FinFuncion

Algoritmo EJERCICIO05
	
	Definir cantZap Como Entero;
	Definir precTotal Como Real;
	
	Definir precZap Como Entero;
	precZap = 80;
	
	Mostrar 'Ingresar cantidad de zapatos comprados: '
	Leer cantZap;
	
	precTotal <- CalcularPago(cantZap, precZap);
	
	Mostrar 'El precio con descuento es: ' precTotal;
	
FinAlgoritmo
