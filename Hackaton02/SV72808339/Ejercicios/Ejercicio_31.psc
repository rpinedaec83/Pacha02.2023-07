//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Proceso Ejercicio_31
	
	Dimension num[10]
	
	Para i<-1 Hasta 10
		Leer num[i]
		Si num[i] % 2 == 0
			sumaPar <- sumaPar + num[i]
			pares <- pares + 1
		SiNo
			sumaImpar <- sumaImpar + num[i]
			impares <- impares + 1
		FinSi
	FinPara
	Escribir sumaPar/pares
	Escribir sumaImpar/impares
	
FinProceso
