Algoritmo CalcularMediaParesImpares
    Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares como Entero
    Definir mediaPares, mediaImpares como Real
	
    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0
	
    Para i <- 1 hasta 10 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
		
        Si numero MOD 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        Fin Si
    Fin Para
	
    Si contadorPares > 0 Entonces
        mediaPares = sumaPares / contadorPares
        Escribir "La media de los números pares es:", mediaPares
    Sino
        Escribir "No se ingresaron números pares."
    Fin Si
	
    Si contadorImpares > 0 Entonces
        mediaImpares = sumaImpares / contadorImpares
        Escribir "La media de los números impares es:", mediaImpares
    Sino
        Escribir "No se ingresaron números impares."
    Fin Si
Fin Algoritmo

