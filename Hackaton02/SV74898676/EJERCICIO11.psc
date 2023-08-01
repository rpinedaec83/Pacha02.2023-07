Funcion num <- LeerEntero(txt)
	
	Definir n Como Entero;
	
	Mostrar txt;
	Leer n;
	
	num <- n
FinFuncion

Funcion EncontrarMayor(num1, num2, num3, max Por Referencia)
	
	Si num1 > num2 Y num1 > num3 
		max <- num1;
		
	SiNo
		Si num2 > num1 Y num2 > num3
			max <- num2;
			
		SiNo
			Si num3 > num1 Y num3 > num2
				max <- num3;
				
			FinSi
		FinSi
	FinSi
	
FinFuncion

Algoritmo EJERCICIO11
	
	Definir num1, num2, num3, max Como Entero;
	
	num1 <- LeerEntero('Ingresar N1: ');
	num2 <- LeerEntero('Ingresar N2: ');
	num3 <- LeerEntero('Ingresar N3: ');
	
	EncontrarMayor(num1, num2, num3, max);
	
	Mostrar 'El numero mayor es: ' max;

FinAlgoritmo
