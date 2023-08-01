//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi
//con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - (4/(121314) ...

Proceso Ejercicio_40
	
	Definir aprox, actual, pre, sum Como Real
	Definir signo,a,stop Como Entero
	aprox <- 3; signo <- 1; stop <- 0; a <- 2
	Escribir "precision"
	Leer pre
	Mientras stop == 0
		actual <- 4.0 / (a * (a+1) * (a+2)) * signo
		sum <- sum + actual
		Si Abs(actual) < pre
			stop <- 1
		FinSi
		signo <- signo * (-1)
		a <- a + 2
	FinMientras
	aprox <- aprox + sum
	Escribir aprox
	
FinProceso
