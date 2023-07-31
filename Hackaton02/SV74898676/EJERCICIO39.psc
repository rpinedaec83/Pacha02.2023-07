//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie 
//de Gregory-Leibniz. La fórmula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Funcion flag <- SerieGregoryLeibniz(curr Por Referencia, prec Por Referencia, acum Por Referencia, sig Por Referencia, i Por Referencia)
	
	curr <- (1 / i) * sig;
	acum <- acum + curr;
	
	Si abs(curr) < prec Entonces
		flag <- 1;
	FinSi
	
	Si flag == 0
		sig <- sig * (-1);
		i = i + 2;
	FinSi
	
FinFuncion

Algoritmo EJERCICIO39
	
	Definir piAprox, current, prec, acum, flag Como Real;
	flag <- 0;
	piAprox <- 0;
	
	Definir sig, i Como Entero;
	i <- 1;
	sig <- 1;
	
	Mostrar 'Ingresar precision deseada: ';
	Leer prec;
	
	Mientras flag == 0
		
		flag <- SerieGregoryLeibniz(current, prec, acum, sig, i);
		
	FinMientras
	
	piAprox <- 4 * acum;
	
	Mostrar 'Aproximación de PI es: ', piAprox;
	
FinAlgoritmo
