// 31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Algoritmo ejercicio31
	Escribir "Calculando la media de los numeros pares e impares"
	Escribir "Ingrese diez numeros:"
	sumaPares <- 0
	sumaImpares <- 0
	cantPares <- 0
	cantImpares <- 0
	Para i <- 1 Hasta 10 Con Paso 1 hacer
		Leer numero
		Si numero MOD 2 = 0 Entonces
			sumaPares <- sumaPares + numero
			cantPares <- cantPares + 1
		SiNo
			sumaImpares <- sumaImpares + numero
			cantImpares <- cantImpares + 1
		FinSi
	FinPara
	Si cantPares > 0 Entonces
		mediaPares <- sumaPares / cantPares
		Escribir "La media de los numeros pares es:", mediaPares
	SiNo
		Escribir "No se ingresaron numeros pares"
	FinSi
	
	Si cantImpares > 0 Entonces
		mediaImpares <- sumaImpares / cantImpares
		Escribir "La media de los numeros impares es:", mediaImpares
	SiNo
		Escribir "No se ingresaron numeros impares"
	FinSi
	
FinAlgoritmo
