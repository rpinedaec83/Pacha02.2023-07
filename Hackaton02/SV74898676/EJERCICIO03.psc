//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Funcion result <- NumTerminaCuatro(num Por Valor) 
	num <- num % 10;
	
	Si num == 4
		result <- 'SI'
	SiNo
		result <- 'NO'
	FinSi
	
FinFuncion

Algoritmo EJERCICIO03
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar un num: ';
	Leer num;
	
	Mostrar NumTerminaCuatro(num) + ' termina en 4.';
	
FinAlgoritmo
