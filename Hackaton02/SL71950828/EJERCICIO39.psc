//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso EJERCICIO39
    Definir n, i como Entero
    Definir termino, piAproximado como Real
	
    Escribir "Ingrese la cantidad de términos para la aproximación de Pi:"
    Leer n
	
    piAproximado = 0
	
    Para i <- 1 hasta n Hacer
        termino = 4.0 / (2 * i - 1)
        Si (i MOD 2) = 0 Entonces
            piAproximado = piAproximado - termino
        Sino
            piAproximado = piAproximado + termino
        Fin Si
    Fin Para
	
    Escribir "La aproximación de Pi con ", n, " términos es:", piAproximado
FinProceso
