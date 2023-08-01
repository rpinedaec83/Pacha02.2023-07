//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso EJERCICIO13
	
	Definir letra Como Caracter;
	Escribir "Escribe una letra"
	Leer letra;
	letra <- Mayusculas(letra);
	Si (letra='A' o letra ='E' o letra ='I' o letra ='O' o letra='U')   Entonces
        Escribir "La ",letra," es una vocal";
	SiNo
		Escribir "La ",Letra," es una consonante";
	FinSi
	
FinProceso