// 3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso Numero_termina_en_4
	Definir n Como Entero
	Escribir "Algoritmo que determinará si su número termina en 4"
	Escribir "---------------------------------------------------"
	Escribir "Ingrese un número: "
	Leer n
	
	Si n Mod 10 == 4 Entonces
		Escribir "El número ",n," sí termina en 4"
	SiNo
		Escribir "El número ",n," no termina en 4"
	FinSi
	
FinProceso
