Algoritmo problema_31
    Definir contadorPares, contadorImpares, sumaPares, sumaImpares, num, mediaPares, mediaImpares Como Real
	
    contadorPares <- 0
    contadorImpares <- 0
    sumaPares <- 0
    sumaImpares <- 0
	
    Escribir "Ingrese diez números:"
	
    Para i <- 1 Hasta 10 Hacer
        
        Leer num
		
        Si num mod 2 = 0 Entonces
            sumaPares <- sumaPares + num
            contadorPares <- contadorPares + 1
        Sino
            sumaImpares <- sumaImpares + num
            contadorImpares <- contadorImpares + 1
        FinSi
    FinPara
	
    Si contadorPares > 0 Entonces
        mediaPares <- sumaPares / contadorPares
    FinSi
	
    Si contadorImpares > 0 Entonces
        mediaImpares <- sumaImpares / contadorImpares
    FinSi
	
    Escribir "La media de los números pares es: ", mediaPares
    Escribir "La media de los números impares es: ", mediaImpares
	
FinAlgoritmo
