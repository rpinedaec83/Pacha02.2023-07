Algoritmo Ejercicio_3
    Definir num, residuo Como Entero
	
    Escribir "Ingrese el numero para comprobar si termina en 4:"
    Leer num
	
    residuo = num MOD 10
	
    Si residuo = 4 Entonces
        Escribir num," termina en 4."
    Sino
        Escribir num," NO termina en 4."
    FinSi
FinAlgoritmo

