// Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
// Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...
Proceso  EJERCICIO40	
	Escribir "Ingrese la cantidad de terminos para la aproximacion de Pi: "
	Leer num
	pii=3.0
	para i=0 hasta num-1 con paso 1 Hacer
		denominador=(2*i+2)*(2*i+3)*(2*i+4)
		Si	i%2=0	Entonces
			pii=pii+4/denominador
		SiNo
			pii=pii-4/denominador
		FinSi
		
	FinPara
	Escribir "El valor aproximado de PI con " num "terminos es: " pii
	
FinProceso
