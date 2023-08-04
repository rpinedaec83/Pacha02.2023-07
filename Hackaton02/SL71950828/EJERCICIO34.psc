//Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.
Proceso Ejercicio34
    Definir numero, multiplicador, resultado como Entero
	
    Para numero <- 1 hasta 9 Hacer
        Escribir "Tabla de multiplicar del número ", numero, ":"
        Para multiplicador <- 1 hasta 10 Hacer
            resultado <- numero * multiplicador
            Escribir numero, " x ", multiplicador, " = ", resultado
        Fin Para
        Escribir "--------------------------"
    Fin Para
	
FinProceso
