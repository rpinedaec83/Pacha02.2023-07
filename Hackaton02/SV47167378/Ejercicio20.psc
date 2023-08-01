Proceso Ejercicio20
	
	cont=0
	Escribir " Escribir 4 numeros enteros: "
	Escribir  " Inserte el Primer numero : "
	leer n1
	Escribir  " Inserte el Segundo numero : "
	leer n2
	Escribir  " Inserte el Tercer numero : "
	leer n3
	Escribir  " Inserte el Cuarto numero : "
	leer n4
	
	
	si n1 mod 2 == 0 Entonces
		cont = cont + 1
		SiNo
		cont = cont
		fin si 
	
	cont = cont	
	si n2 mod 2 == 0 Entonces
		cont = cont + 1
		SiNo
		cont = cont
		fin si 	
	
	cont = cont	
	
	si n3 mod 2 == 0 Entonces
		cont = cont + 1
		SiNo
		cont = cont
		fin si 
	
	cont = cont	
	
	si n4 mod 2 == 0 Entonces
		cont = cont + 1
		SiNo
		cont = cont
		FinSi
	
		cont = cont		
	
	Escribir "hay " cont " numeros pares"
	
	si n1>n2 y n1>n3 y n1>n4 Entonces
		Escribir n1 " es el numero mayor "
	sino 
		si n2>n1 y n2>n3 y n2>n4 Entonces
		Escribir n2 " es el numero mayor "
	sino 
		si n3>n1 y n3>n2 y n3>n4 Entonces
			Escribir n3 " es el numero mayor "	
		sino 
			Escribir n4 " es el numero mayor "
	FinSi
	FinSi
FinSi

si n3 mod 2 == 0 Entonces
	cua = n2 * n2
	Escribir "El cuadrado del segundo es :" cua
FinSi

si n1<n4 Entonces
	media= (n1+n2+n3+n4)/4
	Escribir "La media de los 4 es: " media
FinSi

si n2 > n3 Entonces
	si n3 >= 50 y n3 <= 700 Entonces
		Total = n1 + n2 + n3 + n4
		escribir "La suma de los 4 es: " Total
	FinSi
FinSi
	
	

	
FinProceso
