//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Hora
	Definir h,m,s,ST,h1,m1,s1 Como Entero
	Escribir "Calcular la hora después de un segundo"
	Escribir "--------------------------------------"
	Escribir " "
	Escribir "Ingrese el número de hora(s): "
	Leer h
	Escribir "Ingrese el número de minuto(s): "
	Leer m
	Escribir "Ingrese el número de segundo(s): "
	Leer s
	
	ST <- (h*3600)+(m*60)+s+1
	h1 <- Trunc(ST/3600)
	r1 <- ST mod 3600
	m1 <- Trunc(r1/60)
	s1 <- r1 mod 60
	
	Escribir "El número de hora(s) es: ",h1
	Escribir "El número de minuto(s) es: ",m1
	Escribir "El número de segundo(s) es: ",s1
	
FinProceso
