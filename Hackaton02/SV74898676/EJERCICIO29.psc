//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con 
//un ciclo repetido.

Funcion result <- CalcularSumaHasta(num) 
	
	Definir sum, i Como Entero;
	i <- 1;
	sum <- 0;
	
	Mientras i <= num
		
		sum <- sum + i;
		i <- i + 1;
		
	FinMientras

	result <- sum;
	
FinFuncion

Algoritmo EJERCICIO29
	
	Definir num Como Entero;
	num <- 100;
	
	Mostrar 'La suma de los numeros hasta ', num, ' es de: ', CalcularSumaHasta(num);
	
FinAlgoritmo
