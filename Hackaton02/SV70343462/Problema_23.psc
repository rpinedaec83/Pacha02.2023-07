Algoritmo problemas_23
    Definir n, suma, contador Como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer n
	
    Si n <= 0 Entonces
        Escribir "El número ingresado debe ser un entero positivo."
    Sino
        suma <- 0
        contador <- 1
		
        Mientras contador <= n
            Si contador % 2 <> 0 Entonces
                suma <- suma + contador
            Fin Si
            contador <- contador + 1
        Fin Mientras
		
        Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    Fin Si
Fin Algoritmo
