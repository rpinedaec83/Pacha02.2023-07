//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados 
//de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que
//representen al número identificador del empleado y la cantidad de días que trabajó en la
//semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que 
//el dueño le debe pagar al empleado que ingresó.

Proceso Ejercicio_19
	
	Definir tipo,dias,sueldo Como Entero
	Definir rep Como Logico
	
	Leer tipo
	
	Segun tipo
		1: sueldo <- 56
		2: sueldo <- 64
		3: sueldo <- 80
		4: sueldo <- 48
	FinSegun
	
	rep <- Verdadero
	Mientras rep = Verdadero
		Leer dias
		Si dias <= 6 y dias >= 1
			rep <- Falso
		SiNo
			rep <- Verdadero
		FinSi
	FinMientras
	
	Escribir "Sueldo: ",dias * sueldo
	
FinProceso
