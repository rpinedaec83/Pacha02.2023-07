// 19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
// con su número identificador y salario diario correspondiente:
// Cajero (56$/día).
// Servidor (64$/día).
// Preparador de mezclas (80$/día).
// Mantenimiento (48$/día).
// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador 
// del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad 
// de dinero que el dueño le debe pagar al empleado que ingresó

Algoritmo ejercicio19
	Definir empleado,dia Como Entero
	salario = 0	
	Escribir 'Ingrese el identificador del empleado'
	Escribir "01: Cajero"
	Escribir "02: Servidor"
	Escribir "03: Preparador de mezclas"
	Escribir "04: Mantenimiento"
	Leer empleado
	Escribir 'Ingrese los días trabajados maximo 6 dias'
	Leer dia
	
	Si dia <= 6 Entonces
		Segun empleado hacer
			01: 
				Escribir "Total a pagar al Cajero: $",(dia*56)
		    02: 
				Escribir "Total a pagar al Servidor: $",(dia*64)
			03: 
				Escribir "Total a pagar al Preparador de mezclas: $",(dia*80)
			04: 
				Escribir "Total a pagar al de Mantenimiento: $",(dia*48)
			De Otro Modo:
				Escribir "Codigo de Empleado no válido"
		FinSegun
	SiNo
		Escribir "Los dias deben ser como maximo 6"
	FinSi
FinAlgoritmo