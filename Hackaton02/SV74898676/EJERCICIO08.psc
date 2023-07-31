//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el 
//estudiante aprobó o no.

Funcion num <- LeerEntero(txt) 
	
	Definir n Como Entero
	
	Mostrar txt;
	Leer n;
	
	num <- n;
	
FinFuncion

Funcion result <- VerificarAprobacion(prom)
	
	Si prom >= 13
		result <-'SI';
	SiNo
		result <- 'NO';
	FinSi
	
FinFuncion

Algoritmo EJERCICIO08
	
	Definir nota1, nota2, nota3, prom Como Entero;
	
	nota1 <- LeerEntero('Ingresar nota 1: ');
	nota2 <- LeerEntero('Ingresar nota 2: ');
	nota3 <- LeerEntero('Ingresar nota 3: ');
	
	prom <- trunc((nota1 + nota2 + nota3) / 3);
	
	Mostrar VerificarAprobacion(prom) + ' aprobo.';
	
FinAlgoritmo
