Funcion result <- TotalCompra(CDs)
	
	Si CDs >= 1 Y CDs <= 9
		result <- 10 * CDs;
		
	SiNo
		Si CDs >= 10 Y CDs <= 99
			result <- 8 * CDs;
			
		SiNo
			Si CDs >= 100 Y CDs <= 499
				result <- 7 * CDs;
				
			SiNo
				Si CDs >= 500
					result <- 6 * CDs;
					
				FinSi
			FinSi
		FinSi
	FinSi
	
FinFuncion

Funcion result <- CalcularGanancia(tCompra) 
	result <- tCompra * 0.0825;
FinFuncion

Algoritmo EJERCICIO18
	
	Definir CDs Como Entero;
	Definir tCompra Como Entero;
	Definir ganancia Como Real;
	
	Mostrar 'Cantidad de CDs a vender: ';
	Leer CDs;
	
	tCompra <- TotalCompra(CDs);
	ganancia <- CalcularGanancia(tCompra);
	
	Mostrar 'Total de compra para cliente: ' tCompra;
	Mostrar 'Ganancia para vendedor: ' ganancia;
	
FinAlgoritmo
