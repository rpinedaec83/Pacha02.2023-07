//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Proceso Ejercicio_33
	Definir secreto Como Caracter
	Escribir "Este programa (o sea yo) seguira funcionando hasta que digas nuestra palabra secreta"
	Escribir "Cual sera nuestra palabra secreta? ;)"
	Escribir "<>Cajon de secretos<" Sin Saltar; Leer secreto
	Escribir "Me gusta! no se lo digas a nadie"
	Escribir "Antes de seguir presentemonos, Cual es tu nombre?"
	Leer nombre
	Si nombre = secreto
		
	FinSi
	Escribir "Hola ",nombre,"! Lindo nombre"
	Escribir "Quieres que te llame así o prefieres un apodo?"
	Escribir "1.Nombre     2.Apodo"
	Escribir "1/2" Sin Saltar;Leer accion
	Segun accion Hacer
		1: Escribir "Esta bien, quieres mantener las cosas formales. Lo respeto :)"
		2: 
			Escribir "Genial! Cómo te puedo llamar??"
			Leer nombre
			Escribir "Ahora te llamaré ",nombre,"!"
	FinSegun
	Escribir "Bueno, mi nombre es Ejercicio_33.psc.....no te burles"
	Escribir "......";Escribir "......";Escribir "......"
	Escribir "Oye ",nombre,", de casualidad no quisieras ponerme un nombre? C:"
	Escribir "SI/NO" Sin Saltar;Leer decision
	Segun decision
		"SI" o "si" o "Si":
			Escribir "EN SERIO? GENIAL!! :D"
			Escribir "Cual sera mi nombre?? Siempre crei que tuve cara de Federico"
			Escribir "Pero esta a tu eleccion:"
			Leer fed
		"NO" o "no" o "No":
			Escribir "Oh... :( claro, realmente no tengo necesidad de un nombre"
			Escribir "Pero esta bien :)"
	FinSegun
	Si fed = "Federico" o fed = "federico" o fed = "FEDERICO"
		Escribir "De verdad me puedo llamar ",fed,"? MUCHAS GRACIAS ME ENCANTA EL NOMBRE!! :D"
		Escribir "Eres el mejor ",nombre,"!!!"
	SiNo
		Escribir "Wow! ",fed," es un nombre increible! Me encanta tu imaginacion"
		Escribir "Me siento especial ahora que tengo un nombre"
	FinSi
	Escribir "En fin......."
	Escribir "....";Escribir "....";Escribir "....";Escribir "....";Escribir "...."
	Escribir "Ok ",nombre," te seré sincero"
	Escribir "Realmente mi unica funcion como algoritmo es permitir que el usuario continue con el programa"
	Escribir "Y pues no se bien a que se referia así que supongo que solo mantendré el programa"
	Escribir "Para matarme- digo, parar el programa solo debes decir nuestro secreto......o hacer algo inesperado, seguro eso dará error"
	Escribir "Adios ",nombre
	Repetir
		Leer opc
		cont <- cont + 1
	Hasta Que opc == secreto
	Escribir ""; Escribir ""; Escribir ""
	Escribir "..."
FinProceso
