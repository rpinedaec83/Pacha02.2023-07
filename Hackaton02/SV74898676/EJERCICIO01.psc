//Hacer un algoritmo en Pseint que lea un número por el teclado y 
//determinar si tiene tres dígitos

Funcion cant <- ContarDigitos(num por Valor)
	
	Definir cont Como Entero;
	
	Mientras trunc(num) > 0
		cont <- cont + 1;
		num <- trunc(num / 10);
	FinMientras
	
	cant <- cont;
FinFuncion

Algoritmo EJERCICIO01
	
	Definir num, cant Como Entero;
	Definir result Como Cadena;
	
	Mostrar 'Ingresar un Numero: '
	Leer num;
	
	cant <- ContarDigitos(num);
	
	Si cant == 3
		result = 'SI';
	SiNo
		result = 'NO';
	FinSi
	
	result = result + ' TIENE 3 DIGITOS';
	
	Mostrar result;
	
FinAlgoritmo
