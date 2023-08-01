Algoritmo EJERCICIO33
	
	Definir flag Como Logico;
	flag <- Verdadero;
	
	Definir resp Como Caracter;
	
	Mientras flag == Verdadero
		
		Mostrar 'Desea continuar con el programa? (Si(S) - No(N)): '
		Leer resp;
		
		Si resp == 'N'
			flag <- Falso;
		FinSi
		
	FinMientras
	
FinAlgoritmo
