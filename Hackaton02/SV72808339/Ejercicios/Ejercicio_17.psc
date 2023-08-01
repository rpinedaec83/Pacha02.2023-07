//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
//???
Proceso Ejercicio_17
	
	Definir hora, min, seg Como Entero
	Definir H, M, S Como Caracter
	Repetir
		Escribir "Hora" Sin Saltar; Leer hora
		Si hora < 0 o hora > 23
			Escribir "Formato de hora aceptado de 00 a 23"
		FinSi
	Hasta Que hora <= 23 y hora >= 0
	Repetir
		Escribir "Minuto" Sin Saltar; Leer min
		Si min < 0 o min > 59
			Escribir "Minuto entre 0 y 59"
		FinSi
	Hasta Que min <= 59 y min >= 0
	Repetir
		Escribir "Segundo" Sin Saltar; Leer seg
		Si seg < 0 o seg > 59
			Escribir "Segundo entre 0 y 59"
		FinSi
	Hasta Que seg <= 59 y seg >= 0
	
	seg <- seg + 1
	Si seg = 60
		seg <- 0
		min <- min + 1
		Si min = 60
			min <- 0
			hora <- hora + 1
			Si hora = 24
				hora <- 0
			FinSi
		FinSi
	FinSi
	Si seg = 0
		S <- ConvertirATexto(seg)
		S <- "00"
	SiNo
		S <- ConvertirATexto(seg)
	FinSi
	Si min = 0
		M <- ConvertirATexto(min)
		M <- "00"
	SiNo
		M <- ConvertirATexto(min)
	FinSi
	Si hora = 0
		H <- ConvertirATexto(hora)
		H <- "00"
	SiNo
		H <- ConvertirATexto(hora)
	FinSi
	Escribir "La hora después de un segundo: "
	Escribir H,":",M,":",S
	
FinProceso
