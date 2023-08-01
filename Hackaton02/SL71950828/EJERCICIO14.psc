// Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso EJERCICIO14
	
    Definir num Como Entero
    Definir primo Como Logico
	
    Escribir "Ingrese un numero del 1 al 10: "
    Leer num
	Si num > 10 Entonces
		Escribir "El numero que ingresaste no es correcto"
	SiNo
		
		Si num == 1 O num == 0  Entonces
			primo <- Falso
		SiNo
			primo <- Verdadero
			Para i <- 2 Hasta num - 1 Con Paso 1 Hacer
				Si num Mod i == 0 Entonces
					primo <- Falso
				FinSi
			FinPara
		FinSi
	
		Si primo Entonces
			Escribir "El numero ingresado es primo."
		SiNo
			Escribir "El numero ingresado no es primo."
		FinSi
	FinSi
	
FinProceso
