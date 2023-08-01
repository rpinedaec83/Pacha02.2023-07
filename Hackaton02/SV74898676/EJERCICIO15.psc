//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Funcion num <- LeerReal(txt) 	
	Definir n Como Real;
	
	Mostrar txt;
	Leer n;
	
	num <- n;
FinFuncion

Funcion result <- ConvertirCentimetrosPulgadas(centimetros)
	result <- centimetros / 2.54;
FinFuncion

Funcion result <- ConvertirLibraKilogramos(libras)
	result <- libras * 0.453592;
FinFuncion

Algoritmo EJERCICIO15
	
	Definir cm, plg Como Real;
	Definir lb, kg Como Real;
	
	cm <- LeerReal('Ingresar cantidad de centimetros: ');
	lb <- LeerReal('Ingresar cantidad en libras: ');
	
	kg <- ConvertirLibraKilogramos(lb);
	plg <- ConvertirCentimetrosPulgadas(cm);
	
	Mostrar 'Centimetros -> Pulgadas: ' plg;
	Mostrar 'Libras -> Kilogramos: ' kg;
	
FinAlgoritmo
