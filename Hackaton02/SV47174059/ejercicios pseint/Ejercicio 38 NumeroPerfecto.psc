Algoritmo NumeroPerfecto
    Definir numero, sumaDivisores como Entero
	
    Escribir "Ingrese un número entero:"
    Leer numero
	
    sumaDivisores <- 0
	
    // Buscar los divisores propios del número
    Para divisor <- 1 hasta (numero - 1) Hacer
        Si numero % divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        Fin Si
    Fin Para
	
    // Verificar si el número es perfecto
    Si sumaDivisores = numero Entonces
        Escribir "El número", numero, "es un número perfecto."
    Sino
        Escribir "El número", numero, "NO es un número perfecto."
    Fin Si
Fin Algoritmo
