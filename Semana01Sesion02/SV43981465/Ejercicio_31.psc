//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, 
// sólo se ingresará diez números.
Proceso Media_pares_impares
	Definir n,x Como Entero
	Definir i,p,mp,mi Como Real
	
	Repetir
		Escribir "Ingresar número :"
		Leer n
		si x mod 2 <> 0 Entonces
			sp = sp + n
			p = p + 1
			x = x + 1
		SiNo
			is = is + n
			i = i + 1
			x = x + 1
		FinSi
	Hasta Que (x >= 10)
	
	mp = sp / p
	mi = is / i
	
	Escribir "La media de los números pares es: ",mi
	Escribir "La media de los números impares es: ",mp
	
FinProceso
