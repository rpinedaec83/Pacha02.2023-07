//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Funcion result <- ObtenerSumatoria(num)
	
	Definir acum Como Entero;
	
	Para i <- 1 Hasta num Con Paso 1 Hacer
		acum = acum + i;
	FinPara
	
	result <- acum;
	
FinFuncion

Algoritmo EJERCICIO22
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar numero: ';
	Leer num;
	
	Mostrar 'Suma de los numeros hasta ' num, ' es: ', ObtenerSumatoria(num);
	
FinAlgoritmo
