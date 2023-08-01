//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Funcion result <- LeerEntero(txt)
	
	Definir n Como Entero;
	
	Mostrar txt;
	Leer n;
	
	result <- n;
	
FinFuncion

Funcion CalcularDivision(divi, div, co Por Referencia, re  Por Referencia)
	
	Mientras re >= divi
		re <- re - div;
		co <- co + 1;
	FinMientras
	
FinFuncion

Algoritmo EJERCICIO26
	
	Definir dividendo, divisor, cociente, resto Como Entero;
	
	cociente <- 0;
	
	dividendo <- LeerEntero('Ingresar el dividendo: ');
	divisor <- LeerEntero('Ingresar el divisor: ');
	
	resto <- dividendo;
	
	CalcularDivision(dividendo, divisor, cociente, resto);
	
	Mostrar 'Cociente: ', cociente;
	Mostrar 'Resto: ', resto;
	
FinAlgoritmo
