Proceso Ejercicio8
	Definir n1,n2,n3, promedio Como real
	Escribir "Ingrese nota 1:"
	Leer n1
	Escribir "Ingrese nota 2:"
	Leer n2
	Escribir "Ingrese nota 3:"
	Leer n3
	
	promedio<- (n1+n2+n3)/3 // Nota: puse el parcial en 30 porque si se pone a 40 la suma es 110 %
	Si promedio>=0 y promedio<=20 Entonces
	si promedio<10.5  Entonces
		Escribir "Promedio es ",promedio
		Escribir "Desaprobado"
	SiNo
		si promedio>=10.5 Entonces
			Escribir "Promedio es ",promedio
			Escribir "Aprobado"	
		FinSi
	FinSi
SiNo
	Escribir "Datos invalidos"
FinSi
FinProceso
