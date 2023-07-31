// 35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Algoritmo ejercicio35
	Definir may,men, num como entero
   
    Escribir "Ingrese 20 numeros:"
    
    Para i <- 1 hasta 20 hacer
        Escribir "Numero ", i, ":"
        Leer num
        
        Si i = 1 entonces
            may <- num
            men <- num
        SiNo
            Si num > may entonces
                may <- num
            SiNo
                Si num < men entonces
                    men <- num
                FinSi
            FinSi
        FinSi
        
    FinPara
    
    Escribir "El numero mayor es: ", may
    Escribir "El numero menor es: ", men
	
	
FinAlgoritmo