//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Funcion num <- LeerEntero(txt)
	
	Definir n Como Entero;
	
	Mostrar txt;
	Leer n;
	
	num <- n;
	
FinFuncion

Funcion Sort(num1, num2, num3, min Por Referencia, mid Por Referencia, max Por Referencia) 
	
	Si num1 <= num2 Y num1 <= num3 Entonces
		min <- num1;
		
		Si num2 <= num3 Entonces
			mid <- num2;
			max <- num3;
			
		SiNo
			mid <- num3;
			max <- num2;
		FinSi
		
	SiNo
		Si num2 <= num1 Y num2 <= num3 Entonces
			min <- num2;
			
			Si num1 <= num3 Entonces
				mid <- num1;
				max <- num3
				
			SiNo
				mid <- num3;
				max <- num1;
			FinSi
			
		SiNo
			Si num3 <= num1 Y num3 <= num2 Entonces
				min <- num3;
				
				Si	num1 <= num2 Entonces
					mid <- num1;
					max <- num2;
					
				SiNo
					mid <- num2;
					max <- num1;
				FinSi
				
			FinSi
		FinSi
	FinSi
	
	
FinFuncion

Algoritmo EJERCICIO04
	
	Definir num1, num2, num3 Como Entero;
	Definir min, mid, max Como Entero;
	
	num1 <- LeerEntero('Ingresar Num1: ');
	num2 <- LeerEntero('Ingresar Num2: ');
	num3 <- LeerEntero('Ingresar Num3: ');
	
	Sort(num1, num2, num3, min, mid, max);
	
	Mostrar '->' min;
	Mostrar '->' mid;
	Mostrar '->' max;	
	
FinAlgoritmo
