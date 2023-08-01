Algoritmo Heladeria
    Definir numero, dia Como Entero
	
    Escribir "Ingrese un número del 0 al 3"
    Leer numero
	
	Escribir "Ingresar los días trabajados"
    Leer dia
	//dia=0
	
	
    Segun (numero) hacer
        (0): Escribir dia*56
        (1):Escribir dia*64
        (2):Escribir dia*80
        
        
        De Otro Modo:
            Escribir dia*48
    Fin Segun
Fin Algoritmo