Algoritmo DeterminarNumeroPrimo
    Definir numero, divisor, contador como Entero
    Definir esPrimo como Logico
	
    Escribir "Ingrese un número entero positivo del 1 al 10 o el 9:"
    Leer numero
	
    esPrimo = Verdadero
	
    Si numero >= 1 y numero <= 10 o numero = 9 Entonces
        Si numero = 1 o numero = 9 Entonces
            esPrimo = Falso
        Sino
            divisor = 2
            Mientras divisor <= (numero - 1) Y esPrimo Hacer
                Si numero MOD divisor = 0 Entonces
                    esPrimo = Falso
                Fin Si
                divisor = divisor + 1
            Fin Mientras
        Fin Si
		
        Si esPrimo Entonces
            Escribir "El número es primo."
        Sino
            Escribir "El número NO es primo."
        Fin Si
    Sino
        Escribir "El número ingresado no cumple con los requisitos."
    Fin Si
Fin Algoritmo
