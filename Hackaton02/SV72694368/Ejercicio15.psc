Proceso Ejercicio15
	Definir x Como Entero;
	Definir pugadas, kilo, distancia, peso como real;
	
	Escribir '¿Desea convertir distancia o peso?';
	Escribir "1 Para distancia o 2 para peso";
	Leer x;
	
	Segun (x)  Hacer
		caso 1:
			Escribir 'Ingrese la distancia en centímetros';
			Leer distancia;
			pulgadas = distancia / 2.54;
			Escribir "Las pulgadas son: ", pulgadas;
		caso 2:
			Escribir 'Ingrese el peso en libras';
			Leer peso;
			kilo = peso * (1 / 2.21);
			Escribir "Los kilogramos son : ", kilo;
		De Otro Modo:
			Escribir "opción inválida";
	FinSegun
FinProceso
