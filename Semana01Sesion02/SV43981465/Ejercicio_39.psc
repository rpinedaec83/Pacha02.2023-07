// 39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
// La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso Gregory_Leibniz
	Definir n,sig Como Entero
	Definir aPi,div como Real
	Escribir "Ingrese la cantidad de términos a utilizar: "
	Leer n
	
	aPi = 0
	div = 1
	sig = 1
	
	Para i = 1 Hasta n Con Paso 1 Hacer
		aPi = aPi + (sig/div)
		sig = sig * (-1)
		div = div + 2
	FinPara
	aPi = aPi * 4
	Escribir "La aproximación de Pi con la serie de Gregory-Leibniz es: ",aPi
FinProceso
