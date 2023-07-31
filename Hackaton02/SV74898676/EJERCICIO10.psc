//Hacer un algoritmo en Pseint que diga si un número es par o impar.

Funcion result <- NumParImpar(num)
	
	Si num % 2 == 0
		result <- 'PAR';
	SiNo
		result <- 'IMPAR';
	FinSi
	
FinFuncion

Algoritmo EJERCICIO10
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar un numero: ';
	Leer num;
	
	Mostrar 'Es un numero ' + NumParImpar(num);
	
FinAlgoritmo
