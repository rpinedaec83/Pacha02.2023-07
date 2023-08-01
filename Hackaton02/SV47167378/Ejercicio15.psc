Proceso Ejercicio15
	
	Escribir "Ingrese 1 para convertir de cm a pulgadas"
	Escribir "Ingrese 2 para convertir de Libras a Kilogramos"
	leer opc 
	
	Segun opc Hacer
		1:
			Escribir " ingrese centimetros : "
			Leer cm 
			pul=cm*0.393701
			Escribir  "los " cm " Son " pul " Pulgadas"
			
		2:
			Escribir " ingrese libras : "
			Leer li 
			kil=li*0.453592
			Escribir  "los " li " Son " kil " Kilogramos"
		
		De Otro Modo:
			Escribir " opcion errada "
	Fin Segun
	
FinProceso
