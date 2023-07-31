Funcion result <- LeerEntero(txt) 
	
	Definir n Como Entero;
	
	Mostrar txt;
	Leer n;
	
	result <- n;
	
FinFuncion

Funcion result <- _MOD(num1, num2) 
	result <- num1 % num2;
FinFuncion

FUNCION MCD(num1 Por Referencia, num2)
	
	Definir resto Como Entero;
	
	Mientras num2 <> 0
		
		resto <- _MOD(num1, num2);
		num1 = num2;
		num2 = resto;
		
	FinMientras
	
FinFuncion

Algoritmo EJERCICIO37
	
	Definir num1, num2 Como Entero;
	
	num1 <- LeerEntero("Ingrese el primer número: ");
	num2 <- LeerEntero("Ingrese el segundo número: ");
	
	MCD(num1, num2);
	
	Mostrar 'MCD de los números: ', num1;
	
FinAlgoritmo
