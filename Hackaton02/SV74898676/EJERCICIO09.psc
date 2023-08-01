Funcion total <- VerificarAumento(sueldo) 
	
	Si sueldo >= 2000
		total <- sueldo + trunc(((sueldo * 5) / 100));
		
	SiNo
		total <- sueldo + trunc(((sueldo * 10) / 100));
	FinSi
FinFuncion

Algoritmo EJERCICIO09
	
	Definir sueldo, sueldoFinal como Entero;
	
	Mostrar 'Ingresar sueldo de trabajador: ';
	Leer sueldo;
	
	sueldoFinal <- VerificarAumento(sueldo);
	
	Mostrar 'El sueldo final del trabajador es: ' sueldoFinal;
	
FinAlgoritmo
