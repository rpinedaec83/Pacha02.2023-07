Algoritmo SerieFibonacci
    Definir cantidad, i, numeroAnterior, numeroActual, siguienteNumero como Entero
	
    Escribir "Ingrese la cantidad de números de la serie de Fibonacci a calcular:"
    Leer cantidad
	
    Si cantidad <= 0 Entonces
        Escribir "La cantidad debe ser un número positivo."
	Fin Si


Si cantidad = 1 Entonces
	Escribir "0"
Sino Si cantidad = 2 Entonces
        Escribir "0, 1"
    Sino
        Escribir "0, 1"
        numeroAnterior <- 0
        numeroActual <- 1
		
        Para i <- 3 hasta cantidad Hacer
            siguienteNumero <- numeroAnterior + numeroActual
            Escribir ", ", siguienteNumero
            numeroAnterior <- numeroActual
            numeroActual <- siguienteNumero
        Fin Para
    Fin Si
	Fin Si
	
Fin Algoritmo
