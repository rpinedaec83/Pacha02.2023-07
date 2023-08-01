//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con 
//un ciclo para.

Funcion result <- CalcularSumaHasta(num) 
	
	Definir sum Como Entero;
	sum <- 0;
	
	Para i <- 1 Hasta num Con Paso 1 Hacer
		sum <- sum + i;
	FinPara
	
	result <- sum;
	
FinFuncion

Algoritmo EJERCICIO30
	
	Definir num Como Entero;
	num <- 100;
	
	Mostrar 'La suma de los numeros hasta ', num, ' es de: ', CalcularSumaHasta(num);
	
FinAlgoritmo
