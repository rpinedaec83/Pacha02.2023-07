Funcion result <- EsPrimo(num) 
	
	Definir cont Como Entero;
	cont <- 0;
	
	Para i <- 1 Hasta num Con Paso 1 Hacer
		
		Si num % i == 0 Entonces
			cont <- cont + 1;
		FinSi
		
	FinPara
	
	Si cont == 2
		result <- 'SI';
		
	SiNo
		result <- 'NO';
	FinSi
	
FinFuncion

Algoritmo EJERCICIO14
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar un numero entre 1-10';
	Leer num;
	
	Si num >= 1 Y num <= 10
		Mostrar EsPrimo(num) + ' es primo.';
	SiNo
		Mostrar 'Numero ingresao NO valido.';
	FinSi
	
FinAlgoritmo
