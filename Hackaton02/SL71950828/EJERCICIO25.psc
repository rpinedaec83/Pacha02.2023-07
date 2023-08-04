// Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta
Proceso ejercicio25
	Definir num Como Entero
    Escribir "ingrese un numero"
	Leer  num
    factorial <- 1
    i <- 1
    Mientras i <= num Hacer
        factorial <- factorial * i
        i <- i + 1
    Fin Mientras
    Escribir "El factorial de ", num, " es: ", factorial
FinProceso
