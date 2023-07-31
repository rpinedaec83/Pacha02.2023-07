Funcion num <- LeerEntero(txt)
	
	Definir n Como Entero;
	
	Mostrar txt;
	Leer n;
	
	num <- n
FinFuncion

Funcion EncontrarMayor(num1, num2, max Por Referencia)
	
	Si num1 > num2
		max <- num1;
		
	SiNo
		Si num2 > num1
			max <- num2;
		FinSi
	FinSi
	
FinFuncion

Algoritmo EJERCICIO12
	
	Definir num1, num2, max Como Entero;
	
	num1 <- LeerEntero('Ingresar N1: ');
	num2 <- LeerEntero('Ingresar N2: ');
	
	EncontrarMayor(num1, num2, max);
	
	Mostrar 'El numero mayor es: ' max;
	
FinAlgoritmo
