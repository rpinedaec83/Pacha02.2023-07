// 23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Algoritmo ejercicio23
	Definir num, suma Como Entero
    Escribir "Ingrese un numero entero positivo:"
    Leer num
	Para i=1 Hasta num Con Paso 1 Hacer
		si i mod 2<>0 Entonces
			suma = suma + i
		FinSi
	FinPara
	Escribir "La suma de los n primeros numeros impares menores de ", num," es: ", suma
FinAlgoritmo