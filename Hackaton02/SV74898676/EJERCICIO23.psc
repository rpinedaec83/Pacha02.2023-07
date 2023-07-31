// Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o 
//iguales a n.

Funcion result <- CalcularSumaImpares(num) 
	
	Definir acum Como Entero;
	acum <- 0;
	
	Para i <- 1 Hasta num Con Paso 2 Hacer
		acum <- acum + i;
	FinPara
	
	result <- acum;
	
FinFuncion

Algoritmo EJERCICIO23
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar un número: ';
	Leer num;
	
	Mostrar 'La suma de los impares menor o igual a ', num, ' es: ', CalcularSumaImpares(num);
	
FinAlgoritmo
