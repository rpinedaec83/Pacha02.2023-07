//Hacer un algoritmo en Pseint que permita calcular la factorial de un número.

Funcion result <- Factorial(num) 
	
	Definir fact Como Entero;
	fact <- 1;
	
	Para i <- num Hasta 1 Con Paso -1 Hacer
		fact <- fact * i;
	FinPara
	
	result <- fact;

FinFuncion

Algoritmo EJERCICIO21
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar numero: ';
	Leer num;
	
	Mostrar 'Factorial de ', num ' es ' Factorial(num);	
	
FinAlgoritmo
