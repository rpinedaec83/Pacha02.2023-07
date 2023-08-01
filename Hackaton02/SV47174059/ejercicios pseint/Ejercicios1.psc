Algoritmo VerificarTresDigitos
    Definir numero, cantidadDigitos como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    cantidadDigitos = 0
    Mientras numero > 0 Hacer
        numero = trunc(numero / 10)
        cantidadDigitos = cantidadDigitos + 1
    Fin Mientras
	
    Si cantidadDigitos = 3 Entonces
        Escribir "El número tiene tres dígitos."
    Sino
        Escribir "El número NO tiene tres dígitos."
    Fin Si
Fin Algoritmo

