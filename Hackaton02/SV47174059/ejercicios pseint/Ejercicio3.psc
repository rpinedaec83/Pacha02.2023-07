Algoritmo DeterminarTerminaEn4
    Definir numero, ultimoDigito como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    ultimoDigito = numero % 10
	
    Si ultimoDigito = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número NO termina en 4."
    Fin Si
Fin Algoritmo
