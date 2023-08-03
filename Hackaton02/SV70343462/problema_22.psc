Algoritmo problema_22
    Definir n, suma, contador Como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer n
	
    Si n <= 0 Entonces
        Escribir "El número ingresado debe ser un entero positivo."
    Sino
        suma <- 0
        contador <- 1
		
        Mientras contador <= n
            suma <- suma + contador
            contador <- contador + 1
        Fin Mientras
		
        Escribir "La suma de los ", n, " primeros números es: ", suma
    Fin Si
Fin Algoritmo
