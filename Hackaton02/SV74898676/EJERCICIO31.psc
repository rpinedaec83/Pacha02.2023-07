Funcion result <- EsPar(num) 
	result <- (num % 2 == 0);
FinFuncion

Funcion result <- CalcularMedia(sum, cont) 
	result <- sum / cont;
FinFuncion

Algoritmo EJERCICIO31
	
	Definir flag Como Logico;
	flag <- Verdadero;
	
	Definir num, sumPar, contPar, sumImpar, contImpar Como Entero;
	sumPar <- 0;
	contPar <- 0;
	sumImpar <- 0;
	contImpar <- 0;
	
	Mientras flag == Verdadero
		
		Mostrar 'Ingresar un numero: ';
		Leer num;
		
		Si EsPar(num)	
			sumPar <- sumPar + num;
			contPar <- contPar + 1;
		SiNo
			sumImpar <- sumImpar + num;
			contImpar <- contImpar + 1;
		FinSi
		
		Si (contPar + contImpar) == 10
			flag <- Falso;
		FinSi
		
	FinMientras
	
	Mostrar 'Media pares: ', CalcularMedia(sumPar, contPar);
	Mostrar 'Media impares: ', CalcularMedia(sumImpar, contImpar);
	
FinAlgoritmo
