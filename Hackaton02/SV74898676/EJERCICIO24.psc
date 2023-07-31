//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Funcion result <- SumaParesHasta(num) 
	
	Definir acum Como Entero;
	acum <- 0;
	
	Para i <- 2 Hasta num Con Paso 2 Hacer
		acum <- acum + i;
	FinPara
	
	result <- acum;
	
FinFuncion

Algoritmo EJERCICIO24
	
	Definir sumaT Como Entero;
	
	sumaT <- SumaParesHasta(1000);
	
	Mostrar 'La SUMA de TODOS los números pares hasta 1000 es: ', sumaT;
	
FinAlgoritmo
