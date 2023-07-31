
Funcion result <- LeerEntero(txt) 
	
	Definir n Como Entero;
	
	Mostrar txt;
	Leer n;
	
	result <- n;
	
FinFuncion

Funcion result <- IncrementarSegundo(hora, min, seg) 
	result <- ((hora * 3600) + (min * 60) + seg) + 1;
FinFuncion

Algoritmo EJERCICIO17
	
	Definir hora, min, seg Como Entero;
	Definir totalSeg Como Entero;
	
	hora <- LeerEntero('Ingrese hora: ');
	min <- LeerEntero('Ingrese minutos: ');
	seg <- LeerEntero('Ingrese segundos: ');
	
	totalSeg <- IncrementarSegundo(hora, min, seg);
	
	hora <- trunc(totalSeg / 3600);
	
	totalSeg <- totalSeg % 3600;
	
	min <- trunc(totalSeg / 60);
	seg <- totalSeg % 60;
	
	Mostrar 'Hora: ' hora;
	Mostrar 'Min: ' min;
	Mostrar 'Seg: ' seg;
	
FinAlgoritmo
