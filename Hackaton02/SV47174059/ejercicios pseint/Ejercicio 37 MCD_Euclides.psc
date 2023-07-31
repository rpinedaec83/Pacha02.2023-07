Algoritmo MCD_Euclides
    Definir num1, num2, resto como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    // Asegurarse de que num1 sea mayor o igual que num2
    Si num1 < num2 Entonces
        Definir temp como Entero
        temp <- num1
        num1 <- num2
        num2 <- temp
    Fin Si
	
    // Algoritmo de Euclides
    Mientras num2 > 0 Hacer
        resto <- num1 % num2
        num1 <- num2
        num2 <- resto
    Fin Mientras
	
    Escribir "El M.C.D de los números ingresados es:", num1
Fin Algoritmo

