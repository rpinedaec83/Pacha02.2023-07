Algoritmo CalcularSueldoSemanal
    Definir horasTrabajadas, sueldoPorHora, sueldoSemanal, horasExtras, pagoHorasExtras como Entero
	
    sueldoPorHora = 20
    pagoHorasExtras = 25
	
    Escribir "Ingrese la cantidad de horas trabajadas en la semana:"
    Leer horasTrabajadas
	
    Si horasTrabajadas <= 40 Entonces
        sueldoSemanal = horasTrabajadas * sueldoPorHora
    Sino
        horasExtras = horasTrabajadas - 40
        sueldoSemanal = 40 * sueldoPorHora + horasExtras * pagoHorasExtras
    Fin Si
	
    Escribir "El sueldo semanal es:", sueldoSemanal
Fin Algoritmo
