//Hacer un algoritmo en Pseint que lea un número entero por el teclado
//y determinar si es negativo.

Funcion result <- EsNegativo(num)
	
	Si num < 0
		result <- 'SI'
	SiNo
		result <- 'NO'
	FinSi
	
FinFuncion

Algoritmo EJERCICIO02
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar un numero: '
	Leer num;
	
	Mostrar EsNegativo(num) + ' es un numero negativo';
	
FinAlgoritmo
