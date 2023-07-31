//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de 
//números positivos, se debe acabar el programa al ingresar un número negativo.

Funcion ContarNumIngresados(cont Por Referencia)
	cont <- cont + 1;
FinFuncion

Funcion SumarNumIngresados(sum Por Referencia, num) 
	sum <- sum + num;
FinFuncion

Funcion result <- CalcularMedia(cont, sum) 
	
	Si cont > 0 Entonces
		result <- sum / cont;
		
	SiNo
		result <- -1;
	FinSi
	
FinFuncion

Algoritmo EJERCICIO27
	
	Definir num, cont, sum Como Entero;
	
	sum <- 0;
	cont <- 0;
	
	Mientras num >= 0
		
		Mostrar 'Ingresar numero (parar ingreso con negativo): ';
		Leer num;
		
		Si num >= 0 Entonces
			ContarNumIngresados(cont);
			SumarNumIngresados(sum, num)
		FinSi
		
	FinMientras
	
	Mostrar 'La media de los numeros ingresados es: ', CalcularMedia(cont, sum);
	
FinAlgoritmo
