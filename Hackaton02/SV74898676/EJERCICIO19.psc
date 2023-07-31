//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
//con su número identificador y salario diario correspondiente:
//Cajero (56$/día) - Servidor (64$/día) - Preparador de mezclas (80$/día) - Mantenimiento (48$/día).

Funcion ElegirEmpleados(id Por Referencia)
	
	Repetir
		
		Mostrar '1). Cajero.';
		Mostrar '2). Servidor.';
		Mostrar '3). Preparador de mezclas.';
		Mostrar '4). Mantenimiento.';
		Mostrar 'Ingresar id: ';
		
		Leer id;
		
	Hasta Que id >= 1 Y id <= 4;
	
FinFuncion

Funcion ElegirDias(diasTrab Por Referencia) 
	
	Repetir
		
		Mostrar 'Ingresar cantidad de dias trabajados: ';
		Leer diasTrab;
		
	Hasta Que diasTrab >= 1 Y diasTrab <= 6;
	
FinFuncion

Funcion result <- CalcularPago(id, diasTrab)
	
	Si id == 1 Entonces
		result <- 56 * diasTrab;
	SiNo
		
		Si	id == 2 Entonces
			result <- 64 * diasTrab;
		SiNo
			
			Si id == 3 Entonces
				result <- 80 * diasTrab;
			SiNo
				
				Si id == 4 Entonces
					result <- 48 * diasTrab;
				FinSi
			FinSi
		FinSi
	FinSi
	
FinFuncion

Algoritmo EJERCICIO19
	
	Definir id, diasTrab, pago Como Entero;
	
	ElegirEmpleados(id);
	ElegirDias(diasTrab);
	
	pago <- CalcularPago(id, diasTrab);
	
	Mostrar 'El pago total es: ' pago;
	
FinAlgoritmo
