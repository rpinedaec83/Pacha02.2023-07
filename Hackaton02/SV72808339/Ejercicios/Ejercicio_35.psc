//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso Ejercicio_35
	Definir may,men Como Real
	Dimension num[20]
	
	Para i<-1 Hasta 20
		Escribir "N",i Sin Saltar; Leer num[i]
	FinPara
	
	may <- 0
	Para i<-1 Hasta 20
		Si num[i] > may Entonces
			may <- num[i]
		FinSi
	FinPara
	Para i<-2 Hasta 4
		Si num[i] < men Entonces
			men <- num[i]
		FinSi
	FinPara
	Si -4 < 2
		Escribir "Es menor"
	Sino
		Escribir "No es menor"
	FinSi
	
	Escribir "El numero mayor es: ",may
	Escribir "El numero menor es: ",men
	
FinProceso
