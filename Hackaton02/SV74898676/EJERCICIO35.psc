Funcion InicializarArreglo(arr Por Referencia, tam)
	
	Mostrar 'Ingresar 20 valores: ';
	
	Para i <- 1 Hasta tam Con Paso 1 Hacer
		
		Mostrar 'Num ', i, ': ';  
		Leer arr[i];
		
	FinPara
	
FinFuncion

Funcion FindMinMax(arr, tam, min Por Referencia, max Por Referencia)
	
	Para i <- 1 Hasta tam Con Paso 1 Hacer 
		
		Si	arr[i] < min
			min <- arr[i];
		FinSi
		
		Si arr[i] > max
			max <- arr[i];
		FinSi
		
	FinPara
	
FinFuncion

Algoritmo EJERCICIO35
	
	Definir min, max Como Entero;
	
	Dimensionar arrNum(20);
	
	InicializarArreglo(arrNum, 20);
	min <- arrNum[1];
	max <- arrNum[1];
	
	FindMinMax(arrNum, 20, min, max);
	
	Mostrar 'Mínimo valor: ', min;
	Mostrar 'Máximo valor: ', max;	
	
FinAlgoritmo
