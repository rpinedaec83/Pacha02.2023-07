Proceso Ejercicio32
	Definir cont1, cont2, pob, may Como Entero
	cont1 <- 1
	Mientras (cont1<=3) Hacer
		Escribir 'Ingrese población del distrito numero ', cont1, ':'
		may <- 0
		cont2 <- 1
		Mientras (cont2<=11) Hacer
			Escribir 'Poblacion de la provincia n',cont2,' del distrito numero ', cont1,':'
			Leer pob
			Si (pob>may) Entonces
				may <- pob
			FinSi
			cont2 <- cont2+1
		FinMientras
		Escribir 'La población mayor de la provincia ', cont1, ' es: ', may
		cont1 <- cont1+1
	FinMientras
FinProceso
