//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso EJERCICIO3
	Definir num , num4 como entero
	Escribir "Escribe un numero";
	Leer num;
	Si num < 0 Entonces
		num = num*(-1)
	Fin Si
	Si num >= 0 Entonces
		num4 <- num - trunc(num/10)*10
	FinSi
	Si num4 = 4
		Escribir "El numero que ingresaste si termina en 4"
	SiNo
		Escribir "El numero que ingresaste no termina en 4"
	FinSi
FinProceso
