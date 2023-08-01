Proceso Ejercicio40
	
	Definir i,n1,conta Como Entero
	Definir p_i Como Real
	p_i = 0
	conta = 0
	Escribir 'Ingrese un número'
	Escribir 'Para calcular la sucesión de pi'
	Leer n1
	Para i=2 Hasta n1 Con Paso 2 Hacer
		Si (conta MOD 2=0) Entonces
			p_i = p_i+(4/(i*(i+1)*(i+2)))
		SiNo
			p_i = p_i-(4/(i*(i+1)*(i+2)))
		FinSi
		conta = conta+1
	FinPara
	Escribir 'Pi se aproxima a: ',p_i+3


FinProceso
