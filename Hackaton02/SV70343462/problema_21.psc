Algoritmo problema_21
    Definir num, factorial Como Entero
	
    Escribir "Ingrese un número para calcular su factorial: "
    Leer num
	
    factorial <- 1
	
    Si num >= 0 Entonces
        Para i <- 1 Hasta num
            factorial <- factorial * i
        Fin Para
        Escribir "El factorial de ", num, " es: ", factorial
    Sino
        Escribir "El factorial no está definido para números negativos."
    Fin Si
	
FinAlgoritmo
