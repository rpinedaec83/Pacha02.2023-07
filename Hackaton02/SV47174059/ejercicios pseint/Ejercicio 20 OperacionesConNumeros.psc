Algoritmo OperacionesConNumeros
    Definir num1, num2, num3, num4 como Entero
    Definir suma, promedio como Real
	
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
    // Verificar si todos los números son diferentes
    Si num1 <> num2 y num1 <> num3 y num1 <> num4 y num2 <> num3 y num2 <> num4 y num3 <> num4 Entonces
        Escribir "Todos los números son diferentes."
    Sino
        Escribir "Al menos dos números son iguales."
    Fin Si
	
    // Calcular la suma de los 4 números
    suma = num1 + num2 + num3 + num4
    Escribir "La suma de los 4 números es:", suma
	
    // Calcular el promedio de los 4 números
    promedio = suma / 4
    Escribir "El promedio de los 4 números es:", promedio
Fin Algoritmo
