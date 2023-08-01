//Hacer un algoritmo en Pseint que cumpla con la aproximación
//del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Proceso Ejercicio_39
	
	Leer num
	den <- 1
	Para i<-0 Hasta num-1
		Si i%2 = 0
			pid <- pid + 4/den
		SiNo
			pid <- pid - 4/den
		FinSi
		den <- den + 2
	FinPara
	Escribir pid
	
FinProceso
