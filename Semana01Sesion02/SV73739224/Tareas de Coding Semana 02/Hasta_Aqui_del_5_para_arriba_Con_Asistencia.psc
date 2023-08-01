Proceso Hasta_Aqui_del_5_para_arriba_Con_Asistencia
	Definir cent, pulg, lib, kil Como Real
	Definir opc Como Entero
	Escribir "1 Para convertir de centimetros a pulgadas"
	Escribir "2 Para convertir de libras a kilogramos"
	Leer opc
	Segun opc Hacer
		
		1:
			Escribir "centimetros" Sin Saltar; Leer cent
			pulg <- cent/2.54
			Escribir pulg," pulgadas"
		2:
			Escribir "libras" Sin Saltar; Leer lib
			kil <- lib/2.205
			Escribir kil," kilogramos"
			
	FinSegun
	FinProceso