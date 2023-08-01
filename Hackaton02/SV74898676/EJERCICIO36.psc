Funcion result <- Fibonacci(num) 
	
	Definir n, val, pre, pos Como Entero;
	pre <- 0;
	pos <- 1;
	
	Para  i <- 0 Hasta num Con Paso 1 Hacer
		val <- pre + pos;
		pre <- pos;
		pos <- val;
		
		Mostrar val;
	FinPara
	
FinFuncion

Algoritmo EJERCICIO36
	
	Definir num Como Entero;
	
	Mostrar 'Ingresar cant. terminos: ';
	Leer num;
	
	Mostrar 'Fibonacci de ', num, ' es: ';
	Mostrar Fibonacci(num);
	
FinAlgoritmo
