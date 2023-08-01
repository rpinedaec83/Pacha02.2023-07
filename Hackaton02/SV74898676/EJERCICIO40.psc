//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie 
//de Nilakantha. La fórmula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...

Algoritmo EJERCICIO40
	
    Definir piAproximado, terminoActual, precision, suma Como Real
    Definir signo, i, flag Como Entero;
	
    piAproximado <- 3;
    signo <- 1;
	flag <- 0;
    i <- 2;
	
    Mostrar 'Ingrese la precisión deseada (por ejemplo, 0.001): ';
    Leer precision;
	
    Mientras flag == 0
		
        terminoActual <- 4.0 / (i * (i + 1) * (i + 2)) * signo
        suma <- suma + terminoActual
		
        Si Abs(terminoActual) < precision Entonces
           flag <- 1;
		FinSi
		
			signo <- signo * (-1);
			i <- i + 2 
	FinMientras
	
	piAproximado <- piAproximado + suma
	
	Mostrar 'La aproximación de pi es: ' piAproximado;
	
FinAlgoritmo
