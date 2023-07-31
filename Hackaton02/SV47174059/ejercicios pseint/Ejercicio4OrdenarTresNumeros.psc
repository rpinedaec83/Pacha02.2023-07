Algoritmo OrdenarTresNumeros
    Definir num1, num2, num3, menor, medio, mayor como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    // Encontrar el número menor
    Si num1 <= num2 y num1 <= num3 Entonces
        menor = num1
        Si num2 <= num3 Entonces
            medio = num2
            mayor = num3
        Sino
            medio = num3
            mayor = num2
        Fin Si
    Sino
        Si num2 <= num1 y num2 <= num3 Entonces
            menor = num2
            Si num1 <= num3 Entonces
                medio = num1
                mayor = num3
            Sino
                medio = num3
                mayor = num1
            Fin Si
        Sino
            menor = num3
            Si num1 <= num2 Entonces
                medio = num1
                mayor = num2
            Sino
                medio = num2
                mayor = num1
            Fin Si
        Fin Si
    Fin Si
	
    Escribir "Los números ordenados de menor a mayor son:", menor, ",", medio, ",", mayor
Fin Algoritmo
