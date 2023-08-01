// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Algoritmo ejercicio17
    Definir hora, min, seg como Entero
	
    Escribir "Ingrese la hora (formato 24 horas):"
    Leer hora
    Escribir "Ingrese el minutos:"
    Leer min
    Escribir "Ingrese el segundos:"
    Leer seg
	
    seg = seg+ 1
	
    Si seg == 60 Entonces
        seg = 0
        min = min + 1
    FinSi
	
    Si min == 60 Entonces
        min = 0
        hora = hora + 1
    FinSi
	
    Si hora == 24 Entonces
        hora = 0
    FinSi
	
    Escribir "La hora dentro de 1 Segundo adicional: ", hora, ":", min, ":", seg
	
FinAlgoritmo