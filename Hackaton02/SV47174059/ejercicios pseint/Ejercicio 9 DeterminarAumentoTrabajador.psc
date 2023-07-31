Algoritmo DeterminarAumentoTrabajador
    Definir salario, aumento como Real
	
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario
	
    Si salario > 2000 Entonces
        aumento = salario * 0.05
    Sino
        aumento = salario * 0.10
    Fin Si
	
    Escribir "El aumento del trabajador es:", aumento
Fin Algoritmo

