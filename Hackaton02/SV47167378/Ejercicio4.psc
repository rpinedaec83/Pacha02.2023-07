Proceso Ejercicio4
	

	Definir  n1, n2, n3 Como Entero
	
	Escribir "Ingrese primer numero:"
	Leer num1
	Escribir "Ingrese segundo numero:"
	Leer num2
	Escribir "Ingrese tercero numero:"
	Leer num3
	
	si num1 > num2 y num1 > num3 Entonces
		n1 = num1
	sino 
		si num2 > num1 y num2 > num3 Entonces
			n1 = num2
		sino 
			n1 = num3
		finsi 
	FinSi
	
	si num1 < num2 y num1 > num3 Entonces
		n2 = num1
	sino 
		si num1 > num2 y num1 < num3 Entonces
			n2 = num1
		sino 
			si num2 < num1 y num2 > num3 Entonces
				n2 = num2
			SiNo
			si 	num2 > num1 y num2 < num3 entonces
				n2 = num2
			sino 
				si num3 < num1 y num3 > num2 entonces
					n2 = num3
				sino 
					n2 = num3
				
			FinSi
			
			fin si
			FinSi
		finsi 
	FinSi
	
	si num1 < num2 y num1 < num3 Entonces
		n3 = num1
	sino 
		si num2 < num1 y num2 < num3 Entonces
			n3 = num2
		sino 
			n3 = num3
		finsi 
	FinSi
	
	
	Escribir "el orden de menor a mayor es:" n3 " " n2 " " n1
	
//		Si datos[i]>may1 Entonces // si hay un valor mayor que may1
//			may2<-may1 // como may1 era el más grande, pasa a estar en segundo lugar
//			may1<-datos[i] // y el nuevo dato toma el primer puesto (mayor de todos)
//		SiNo // si no era mas grande que may1, todavia puede ser mas grande que may2
	//		Si datos[i]>may2 Entonces // si supera al segundo mayor que teniamos
		//		may2<-datos[i] // se lo guarda como segundo mayor
			//FinSi
		//FinSi
	
	
//	Para n1 Hasta num1 hasta num3 Con Paso num3 Hacer
//		si num1 > num2 y num1 > num3 Entonces
//			n1= num1
//		sino 
//			si num2 > num1 y num > num3 Entonces
//				n1 = num2
//				sino n1=num3
				
//				fin si 
//			FinSi
			
//		Fin Para
		
//		Escribir "El mayor es:" n1
	
FinProceso
