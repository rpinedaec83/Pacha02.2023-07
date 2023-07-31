Funcion result <- EsVocal(letra)
	
	Si letra == 'A' O letra == 'a' O letra == 'E' O letra == 'e' O letra == 'I' O letra == 'i' O letra == 'O' O letra == 'o' O letra == 'U' O letra == 'u'
		result <- 'SI';
	SiNo
		result <- 'NO';
	FinSi
	
FinFuncion

Algoritmo EJERCICIO13
	
	Definir letra Como Cadena;
	
	Mostrar 'Ingresar una letra: ';
	Leer letra;
	
	Mostrar EsVocal(letra) + ' es vocal.';
	
FinAlgoritmo
