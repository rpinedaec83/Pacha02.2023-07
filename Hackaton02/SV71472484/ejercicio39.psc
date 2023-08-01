// 39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:		
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Algoritmo ejercicio39
	Definir i,num Como entero	
	Definir pii, denominador Como Real
	Escribir "Ingrese la cantidad de terminos para la aproximacion de Pi: "
	leer num
	pii<-0
	denominador<-1
	Para i<-1 Hasta num Hacer
		pii<-pii+(4/denominador)
		denominador<-denominador+2
		pii<-pii-4/denominador
		denominador<-denominador+2
	Fin Para
	Escribir "La aproximacion de Pi con " num " Terminos es: " pii

FinAlgoritmo