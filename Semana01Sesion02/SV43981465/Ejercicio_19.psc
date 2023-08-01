// 19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente 
// forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
//identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso Pago_heladeria
	Definir i,d Como Entero
	Escribir "Pago de empleados en la heladería"
	Escribir "---------------------------------"
	Escribir " "
	Escribir "Listado de empleados:"
	Escribir "1. Cajero"
	Escribir "2. Servidor"
	Escribir "3. Preparador de mezcla"
	Escribir "4. Mantenimiento"
	Escribir " "
	Escribir "Escoge el número de empleado a pagar:"
	Leer i
	Escribir "Registrar el número de días trabajados en la semana (max 6 días)"
	Leer d
	Segun i Hacer
		1:
			s = 56*d
			Escribir "El sueldo del cajero es de $",s
		2:
			s = 64*d
			Escribir "El sueldo del servidor es de $",s
		3:
			s = 80*d
			Escribir "El sueldo del preparador de mezcla es de $",s
		4:
			s = 48*d
			Escribir "El sueldo del mantenimiento es de $",s
		De Otro Modo:
			Escribir "Opción inválida"
	FinSegun
	
FinProceso
