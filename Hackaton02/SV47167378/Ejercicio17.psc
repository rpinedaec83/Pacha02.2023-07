Proceso Ejercicio17
	
//	escribir "Ingrese la Hora"
//	leer Hora
	
//	minutos=hora * 60
//	Seg= minutos * 60
	
//	Escribir " la hora en segundos es: " seg
	
	Definir h Como Real
	Escribir "Ingrese la Hora actual :"
	Leer h
	
	si h > 11 Entonces
		h1 = h mod 12
	sino 
		h1=h
	FinSi
	
	
	Escribir "ingrese los minutos: "
	leer m
	
	si m>59 Entonces
		m1= m mod 60
		ns= m /60
		ns1=TRUNC(ns) 
		h1=ns1+h1
	sino 
		m1=m
	FinSi
	
	Escribir "ingrese los Segundos: "
	leer s
	
	si s>59 Entonces
		s1= s mod 60
		nm= s /60
		nm1=TRUNC(nm) 
		m1=nm1+m1
	sino 
		s1=s
	
	FinSi
	
	si s1>=60 Entonces
		s1= 0
		m1=m1+1
	sino 
		si m1 >= 60 Entonces
			m1 = 0
			h1=h1+1
		FinSi
		
	FinSi
	
	Escribir "la Hora es: " h1 " con " m1 " minutos con " s1 " segundos."
	
	ns=s1+1
	
	si ns >= 60 Entonces
		s1= s mod 60
		nm= s /60
		nm1=TRUNC(nm) 
		m1=nm1+m1
	sino 
		s1=ns
		
	FinSi
	
	si s1>=60 Entonces
		s1= 0
		m1=m1+1
	sino 
		si m1 == 60 Entonces
			m1 = 0
			h1=h1+1
		FinSi
		
	FinSi
	
	Escribir "La nueva hora es: " h1 " con " m1 " minutos con " ns " segundos."
	
	
	
	
FinProceso
