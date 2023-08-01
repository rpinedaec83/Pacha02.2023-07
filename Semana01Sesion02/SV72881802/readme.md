# Resolver los siguientes ejercicios

1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
Proceso Ejercicio1
	Escribir "Ingresar numero" 
	n1 = 0
	Leer n1 
	
	Si n1 >= 0 & n1 <= 9 Entonces
		Escribir "Este numero tiene 1 digito"
	SiNo
		si n1 >= 10 & n1 <= 99 Entonces
			Escribir "Este numero tiene 2 digitos" 
		sino 
			si n1 >= 100 & n1 <= 999 Entonces
				
				Escribir "Este numero tiene 3 digitos"
			FinSi
		FinSi
	FinSi
	Si n1 >= 1000 Entonces
		Escribir "Error de sistema, ingresar un numero menor a 1000"
	FinSi
FinProceso
----------------------------------------------------------------------------------------------------

2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.
    Proceso Ejercicio2 
	definir n1 Como Entero
	Escribir "Escribe el numero"
	n1 = 0 
	Leer n1
	si n1 < 0 entonces 
		Escribir "Este número es negativo"
	sino 
		si n1 > 0 entonces
			Escribir "Este número es positivo"
		FinSi
	FinSi
	
FinProceso
----------------------------------------------------------------------------------------------
3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
    Proceso Ejercicio3 
	Definir n1 Como Entero
	Escribir "Ingresa el número"
	n1 = 0 
	leer n1 
	Si n1 mod 10 == 4 Entonces
		Escribir "El número si termina en 4"
	sino 
		Escribir "El número no termina en 4"
	FinSi
FinProceso
------------------------------------------------------------------------------------------------

4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
    Proceso Ejercicio4
	Definir n1, n2, n3 Como Entero
	Escribir "Escribe el primer número"
	Leer n1
	Escribir "Escribe el segundo número"
	Leer n2
	Escribir "Escribe el tercer número"
	Leer n3
	
	si (n1 > n2) & (n1 > n3) Entonces
		may<-a 
		si n2>n3 Entonces
			inter<-n2
			men<-n3
		SiNo
			inter<-n3
			men<-n2
		FinSi
	sino
		men<-n1
	FinSi
	si (n2 > n1) & (n2 > n3) Entonces
		may<-n2 
		si n1>n3 Entonces
			inter<-n1
			men<-n3
		SiNo
			inter<-n3
			men<-n1
		FinSi
	sino
		men<-n2
	FinSi
	si (n3 > n1) & (n3 > n2) Entonces
		may<-n3 
		si n1>n2 Entonces
			inter<-n1
			men<-n2
		SiNo
			inter<-n2
			men<-n1
		FinSi
	sino
		men<-n3
	FinSi
	Escribir "mayor=",may
	Escribir "intermedio=",inter
	Escribir "menor=",men
	
	
FinProceso
-------------------------------------------------------------------------------------

5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

	Proceso Ejercicio5
	Escribir "Escribe la cantidad de pares de zapatos que deseas comprar"
	Leer n1
	si n1>30 
		Escribir "Se le otorgo un descuento del 40% en su compra"
		n2 = n1 * 80
		np = (n2*40) / 100
		nr = n2 - np
		Escribir "El total a pagar con su descuento es ", nr
	FinSi
	si n1>20 & n1<=30 Entonces
		Escribir "Se le otorgo un descuento del 20% en su compra"
		n2 = n1 * 80
		np = (n2*20) / 100
		nr = n2 - np
		Escribir "El total a pagar con su descuento es ", nr
	FinSi
	
	si n1>10 & n1<=20 Entonces
		Escribir "Se le otorgo un descuento del 10% en su compra"
		n2 = n1 * 80
		np = (n2*10) / 100
		nr = n2 - np
		Escribir "El total a pagar con su descuento es ", nr
		sino 
		si n1<=10 & n1 > 0 Entonces
			n1 = n1 * 80
			Escribir "El precio total de su compra es ", n1
		FinSi
	FinSi
	si n1<0 Entonces
		escribir "Error, por favor ingresar un número positivo"
	FinSi
FinProceso
---------------------------------------------------------------------------------------------------------------------------

6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

	Proceso Ejercicio6
	Definir n1, ne , nr Como Real
	Escribir"¿Cuántas horas a la semana piensa trabajar?"
	Leer n1
	Si n1>40 Entonces
		ne = n1 - 40
		nr = (40*20) + (ne*25)
	SiNo
		nr = n1*20
	FinSi
	Escribir "El pago semanal por las ", n1 " horas trabajadas es ", nr
	si n1<0 Entonces
		Escribir "Colocar un número de horas válido"
	FinSi
FinProceso
-------------------------------------------------------------------------------------------------------------------------

7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

 	Tipo A 10% de descuento
 	Tipo B 15% de descuento
 	Tipo C 20% de descuento

  		Proceso ejercicio7
		definir precio,descuento Como Real;
		definir tipo Como Caracter;
		escribir "¿Cual es el precio del helado?";
		leer precio;
		escribir "¿Que tipo de membresia tiene usted"
		Escribir "tipo a"
		Escribir "tipo b"
		Escribir "tipo c"
		leer tipo;
		Segun tipo Hacer
		"a":
			descuento = (precio * 10)/100;
			precio = precio - descuento;
		"b":
			descuento = (precio * 15)/100;
			precio = precio - descuento;
		"c":
			descuento = (precio * 20)/100;
			precio = precio - descuento;
		Fin Segun
		escribir "el precio es ",precio," soles";
		si precio < 0 Entonces
			Escribir "Ingresa un digito valido sobre el precio del helado porfavor,de otra forma no podremos atenderlo."
		FinSi
		FinProceso
----------------------------------------------------------------------------------------------------------------------------------------

8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Ejercicio8
	Definir nota1, nota2, nota3, promedio Como Real
	Escribir "Escribe tus tres notas"
	leer nota1
	Leer nota2
	Leer nota3
	promedio = (nota1+nota2+nota3)/3
	Escribir "El promedio de tus notas es ", promedio
	si promedio >= 14 Entonces
		Escribir "Usted esta aprobado"
	sino 
		si promedio <= 13 Entonces
			Escribir "Usted esta desaprobado"
		FinSi
	FinSi
FinProceso
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso Ejercicio9
	definir aumento Como Real
	definir pago Como Entero
	Escribir "¿Cuánto ganas al mes?"
	Leer pago
	si pago <= 2000 Entonces
		aumento = pago*10/100
	sino 
		si pago >= 2001 Entonces
			aumento = pago*5/100
		FinSi
	FinSi
	Escribir "Su aumento es ", aumento " dolares."
FinProceso
-------------------------------------------------------------------------------------------

10. Hacer un algoritmo en Pseint que diga si un número es par o impar.
Proceso Ejercicio10
	definir n Como Entero
	Escribir "Escribe un número"
	Leer n
	si n mod 2==0 Entonces
		Escribir "El número ", n " es par."
	SiNo
		Escribir "El número ", n " es impar."
	FinSi
FinProceso
------------------------------------------------------------------------------------

11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	Escribir "Ingresa los números que deseas"
	leer n1, n2, n3
	si n1 > n2 & n1 > n3 Entonces
			Escribir  "El número ", n1 " es el mayor de los tres"
		SiNo
			si n2 > n1 & n2 > n3 entonces
				Escribir "El número ", n2 " es el mayor de los tres"
			SiNo
			FinSi
			si n3 > n1 & n3 > n2 Entonces
				Escribir "El número ", n3 " es el mayor de los tres"
			FinSi
	FinSi
		
FinProceso
---------------------------------------------------------------------------------------


12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
	Proceso Ejercicio12
	Escribir "Ingresa los números que deseas"
	leer n1, n2
	si n1 > n2  Entonces
			Escribir  "El número ", n1 " es el mayor de los tres"
		SiNo
			si n2 > n1  entonces
				Escribir "El número ", n2 " es el mayor de los tres"
			SiNo
			FinSi
	FinSi
	
FinProceso
--------------------------------------------------------------------------------------

13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso Ejercicio13
	definir letra Como Caracter
	Escribir "Ingrese las letras usted desee."
	leer letra 
	si letra == "a" o letra == "e" o letra == "o" o letra == "i" o letra == "u" Entonces
		Escribir "El caracter ", letra " es una vocal"
	sino 
		si letra == "A" o letra == "E" o letra == "I" o letra == "O" o letra == "U" Entonces
			Escribir "El caracter " , letra " es una vocal"
		sino 
			Escribir "El caracter ", letras " es una consonante"
		FinSi
	FinSi
FinProceso
---------------------------------------------------------------------------------------------------

14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso Ejercicio14
	Definir n1, n2, contador Como Entero
	Escribir "Escribe un número"
	Leer n2
	n1 = 1
	contador = 0
	Mientras n1 <= n2 Hacer
		si n2 mod n1 == 0 Entonces
			contador = contador + 1
		FinSi
	n1 = n1+1

FinMientras
si contador == 2 Entonces
	Escribir " El número ",n2 "  es primo"
SiNo
	Escribir " El número ", n2 " no es primo"
FinSi
FinProceso
----------------------------------------------------------------------------


15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso Ejercicio15
	Escribir "1: Convertir centimetros a pulgadas."
	Escribir "2: Convertir libras a kilogramos."
	Leer op
	si op = 1 Entonces
		Escribir "Ingrese la unidad en centimetros para convertir a pulgadas"
		leer n1 
		Pulgadas = n1 * 0.39
		Escribir  n1, " centimetros esquivale a ", pulgadas " pulgadas"
	SiNo
		si op = 2 Entonces
			Escribir "Ingrese la unidad en libras para convertir a kilogramos."
			leer n2
			kilogramos = n2 * 0.45
			Escribir n2 " libras equivale a ", kilogramos "kilogramos."
		FinSi
	FinSi
	FinProceso
--------------------------------------------------------------------------

16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	Definir op Como Entero
	Escribir "Elije la opcion que tu desees"
	Escribir "Opcion 1"
	Escribir "Opcion 2"
	Escribir "Opcion 3"
	Escribir "Opcion 4"
	Escribir "Opcion 5"
	Escribir "Opcion 6"
	Escribir "Opcion 7"
	Leer op
	
	Si op = 1 Entonces
		Escribir "Lunes"
	sino 
		si op = 2 Entonces
			Escribir "Martes"
		sino
			si op = 3 Entonces
				Escribir "Miercoles"
			SiNo
				si op = 4 Entonces
					Escribir "Jueves"
				SiNo
					si op = 5 Entonces
						Escribir "Viernes"
					SiNo
						si op = 6 Entonces
							Escribir "Sabado"
						SiNo
							si op = 7 Entonces
								Escribir "Domingo"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	Si op < 1 Entonces
		Escribir "ERROR, INGRESE UN NÚMERO VALIDO."
	sino 
		si op > 7 entonces
			Escribir "ERROR, INGRESE UN NÚMERO VALIDO."
		FinSi
		
	FinSi
	
FinProceso
----------------------------------------------------------------------------

17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	Definir hora1, minutos1, segundos1 Como Entero;
	DEFINIR formato1, formato2 Como Caracter
	Escribir "Escriba hora";
	Escribir "Hora"; Leer hora1; Escribir "Minutos"; leer minutos1; Escribir "Segundos"; leer segundos1;
	Escribir "Escoja la opcion 1.Am , 2.Pm";
	Leer OP 
	segundos2 = segundos1 + 1
	SI OP = 1 Entonces
		Escribir hora1,":", minutos1 ":" segundos2, "AM"
	SINO 
		SI OP = 2 Entonces
			Escribir hora1,":", minutos1 ":" segundos2, "PM"
			FinSi
	FinSi
	
	

FinProceso
--------------------------------------------------

18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	Proceso EJERCICIO18
	
	Definir cant, prec, total Como Entero
	Definir gan Como Real
	Escribir "¿Cuantos Cds vendiste?"
	Leer cant
	
	Si cant>0 y cant<10 Entonces
		prec <- 10
	Sino
		Si cant>=10 y cant<100
			prec <- 8
		SiNo
			Si cant>=100 y cant<500
				prec <- 7
			SiNo
				Si cant>=500
					prec <- 6
				SiNo
					Escribir "Debe ser un número entero positivo"
				FinSi
			FinSi
		FinSi
	FinSi
	
	total <- cant*prec
	gan <- 8.25/100 * total
	
	Escribir "Precio total: ",total
	Escribir "Ganancia: ",gan
FinProceso
------------------------------------------------------

19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	Proceso  EJERCICIO19
	Definir empleado,dia Como Entero
	Escribir 'Ingrese el identificador del empleado'
	Escribir "01: Cajero"
	Escribir "02: Servidor"
	Escribir "03: Preparador de mezclas"
	Escribir "04: Mantenimiento"
	Leer empleado
	Escribir 'Ingrese los días trabajados'
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
		Escribir "El limite de dias es 6"
	FinSi
FinProceso
------------------------------------------------------

20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Proceso EJERCICIO20
	
	Dimension numbers[4]
	
	Para i<-1 Hasta 4
		Escribir "Escribe tu ",i," Numero"  Sin Saltar; Leer numbers[i]
		Si numbers[i] < 0
			Repetir
				Escribir "Solo numeros entero positivo"
				Escribir "N",i Sin Saltar; Leer numbers[i]
			Hasta Que numbers[i] > 0
		FinSi
	FinPara
	
	Para i<-1 Hasta 4
		
		Si numbers[i] % 2 == 0
			pares = pares + 1
		FinSi
		
	FinPara
	
	Escribir pares," numeros son pares"
	may <- 0
	Para i<-1 Hasta 4
		
		Si numbers[i] > may Entonces
			may <- numbers[i]
		FinSi
		
	FinPara
	
	Escribir may," es el mayor de todos"
	
	Si numbers[3] % 2 == 0
		
		Escribir "Cuadrado del N2: ", numbers[2]*numbers[2]
		
	FinSi
	
	Si numbers[1] < numbers[4]
		sum <- 0
		Para i<-1 hasta 4
			
			sum <- sum + numbers[i]
			
		FinPara
		Escribir "Media de los 4 numeros: ",sum/4
		Escribir "Suma de todos: ",sum
	FinSi
	
	Si numbers[2] > numbers[3]
		Si numbers[3] >= 50 y numbers[3] <= 700
			Escribir "El N3 está entre 50-700"
		SiNo
			Escribir "El N3 NO está entre 50-700"
		FinSi
	FinSi
	
	
FinProceso
-------------------------------------------------------------------------------------

21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso EJERCICIO21
	Escribir "Ingrese un numero entero positivo:"
	Leer num
	factorial <- 1
	Si num == 0 Entonces
		factorial = 1
	SiNo
		Para i <- 1 Hasta num
			factorial <- factorial * i
		Fin Para
	FinSi
	Escribir "El factorial de ", num, " es: ", factorial
FinProceso
---------------------------------------------------------------------------------

22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso Ejercicio22
	Definir num, suma Como Entero
	Escribir "Escribe un numero"
	Leer num
	Para i<-0 Hasta num
		suma <- suma + i
	FinPara
	Escribir "La suma de los n primeros números de ", num," es: " suma
	
FinProceso
-------------------------------------------------------------------------------------------------

23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio23
	Definir num, suma Como Entero
	Escribir "Escribe un numero: "
	Leer num
	
	suma <- 0
	Para i<-0 Hasta num
		Si i % 2 <> 0
			
			suma <- suma + i
			
		FinSi
	FinPara
	Escribir "La suma de los n primeros números impares menores de ", num," es: ", suma
	
FinProceso
--------------------------------------------------------------

24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso Ejercicio24
	num = 1000 
	suma = 0
	Para i=1 Hasta num Con Paso 1 Hacer
		si i mod 2==0 Entonces
			suma = suma + i
		FinSi
	FinPara
	Escribir "La suma de números Pares hasta " num " es: " suma
	
FinProceso
--------------------------------------------------------------------------------

25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso Ejercicio25
	Definir num Como Entero
    Escribir "ingrese un numero"
	Leer  num
    factorial <- 1
    i <- 1
    Mientras i <= num Hacer
        factorial <- factorial * i
        i <- i + 1
    Fin Mientras
    Escribir "El factorial de ", num, " es: ", factorial
FinProceso
-----------------------------------------------------------------

26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso  Ejercicio26
	Definir dividendo, divisor Como Entero
    Escribir "Ingrese el dividendo: "
	Leer dividendo 
	Escribir "Ingrese el divisor: "
	Leer divisor
	cociente <- 0
    Mientras dividendo >= divisor Hacer
		dividendo <- dividendo - divisor
		cociente <- cociente + 1
	Fin Mientras
	resto <- dividendo
	Escribir "El cociente es: ", cociente
	Escribir "El resto es: ", resto
FinProceso
-----------------------------------------------------------------------------
27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso Ejercicio27
	Definir num1 Como Entero
	Definir num2, suma Como Real
	num1 = 0
	num2 = 1
	suma = 0
	Mientras num1 >= 0 Hacer
		Escribir "Ingresa algún número positivo"
		Escribir "Finaliza con un número Negativo"
		Leer num1
		si num1 >= 0 Entonces
			suma = suma + num1
			num2 = num2 + 1
		FinSi
	FinMientras
	si num2 > 0 Entonces
		Escribir "La media es: " suma/num2
	FinSi
FinProceso
----------------------------------------------------
28. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.
Proceso Ejercicio28
	suma = 0
	i = 1
	Repetir		
		suma = suma + i
		i = i + 1
	Hasta Que i == 101	
	Escribir "La suma de los primeros 100 números es: ", suma
FinProceso
---------------------------------------------------------------------
29. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.
Proceso  Ejercicio29
	suma = 0
	i = 1
	Mientras i <= 100 hacer
		suma = suma + i
		i = i + 1
	FinMientras	
	Escribir "La suma de los primeros 100 números es: ", suma	
FinProceso
--------------------------------------------------

30. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.
Proceso  Ejercicio30
    Definir suma, contador como Entero
	suma = 0
	Para contador <- 1 hasta 100 Hacer
        suma = suma + contador
    Fin Para
	Escribir "La suma de los primeros cien números es:", suma
FinProceso
-----------------------------------------------

31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso  Ejercicio31
	Escribir "Calculando la media de los números pares e impares"
	Escribir "Ingrese diez números:"
	sumaPares <- 0
	sumaImpares <- 0
	cantPares <- 0
	cantImpares <- 0
	Para i <- 1 Hasta 10 Con Paso 1 hacer
		Leer numero
		Si numero MOD 2 = 0 Entonces
			sumaPares <- sumaPares + numero
			cantPares <- cantPares + 1
		SiNo
			sumaImpares <- sumaImpares + numero
			cantImpares <- cantImpares + 1
		FinSi
	FinPara
	Si cantPares > 0 Entonces
		mediaPares <- sumaPares / cantPares
		Escribir "La media de los numeros pares es:", mediaPares
	SiNo
		Escribir "No se ingresaron numeros pares"
	FinSi
	
	Si cantImpares > 0 Entonces
		mediaImpares <- sumaImpares / cantImpares
		Escribir "La media de los numeros impares es:", mediaImpares
	SiNo
		Escribir "No se escribiste números impares"
	FinSi
	
FinProceso
---------------------------------------------------------------

32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
Proceso Ejercicio32
    Definir provincia, ciudad, poblacion, maxPoblacion como Entero
    Definir ciudadMayorPoblacion, provinciaMayorPoblacion como Cadena
	
    maxPoblacion = 0
	
    Para provincia <- 1 hasta 3 Hacer
        Escribir "Provincia ", provincia
        maxPoblacion = 0
		
        Para ciudad <- 1 hasta 11 Hacer
            Escribir "Ingrese la población de la ciudad ", ciudad, ":"
            Leer poblacion
			
            Si poblacion > maxPoblacion Entonces
                maxPoblacion = poblacion
                ciudadMayorPoblacion = "Ciudad " + ConvertirATexto(ciudad)
                provinciaMayorPoblacion = "Provincia " + ConvertirATexto(provincia)
            Fin Si
        Fin Para
		
        Escribir "La ciudad con mayor población en la provincia ", provincia, " es: ", ciudadMayorPoblacion
        Escribir "La poblacion es de ", maxPoblacion, " habitantes."
    Fin Para
	
    Escribir "La ciudad con mayor población  es: ", ciudadMayorPoblacion
    Escribir "Ubicada en la ", provinciaMayorPoblacion
    Escribir "La poblacion es de  ", maxPoblacion, " habitantes."
FinProceso
------------------------------------------------------------------------------
33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso  Ejericicio33
	Definir respuesta como caracter
	Repetir
        Escribir "¿Desea continuar con el programa? (si/no)"
        Leer respuesta
		Si respuesta == "si" o respuesta =="no" Entonces
			Segun respuesta Hacer
				"si":
					Escribir "El programa seguira ejecutandose..."
				"no":
					Escribir "El programa termino"
			FinSegun
		SiNo
			Escribir "Respuesta no valida. Intente otra vez."	
		FinSi
	Hasta Que respuesta == "no"	
	
FinProceso
--------------------------------------------------------------------

34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.
Proceso Ejercicio34
    Definir numero, multiplicador, resultado como Entero
	Para numero <- 1 hasta 9 Hacer
        Escribir "Tabla de multiplicar del número ", número, ":"
        Para multiplicador <- 1 hasta 10 Hacer
            resultado <- numero * multiplicador
            Escribir numero, " x ", multiplicador, " = ", resultado
        Fin Para
        Escribir "--------------------------"
    Fin Para
FinProceso
-----------------------------------------------------------------------------------

35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Proceso Ejercicio35
	Definir may,men, num como entero
	
    Escribir "Ingrese 20 números:"
    
    Para i <- 1 hasta 20 hacer
        Escribir "Numero ", i, ":"
        Leer num
        
        Si i = 1 entonces
            may <- num
            men <- num
        SiNo
            Si num > may entonces
                may <- num
            SiNo
                Si num < men entonces
                    men <- num
                FinSi
            FinSi
        FinSi
        
    FinPara
    Escribir "El número mayor es: ", may
    Escribir "El número menor es: ", men	
FinProceso
--------------------------------------------------------------------

36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso  Ejercicio36
	Escribir "Ingrese la cantidad de terminos de la serie de Fibonacci"
	Escribir "que desea obtener:"
    Leer n	
    a <- 0
    b <- 1
    Escribir a
	Para i <- 1 Hasta n-1 Con Paso 1 Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c
    FinPara		
FinProceso
------------------------------------------------------------------------------

37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso  Ejercicio37
	Definir a, b, r Como Entero
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
    r <- a mod b
    Mientras r <> 0 Hacer
        a <- b
        b <- r
        r <- a mod b
    Fin Mientras
    Escribir "El maximo comun divisor de ", a, " y ", b, " es: ", b
FinProceso
---------------------------------------------------------------------------------

38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso  Ejercicio38
	Escribir "Ingrese un número: "
	Leer num
	suma = 0
	
	Para i = 1 Hasta num - 1 Con Paso 1 Hacer
		Si num MOD i = 0 Entonces
			suma = suma + i
		Fin Si
	Fin Para
	
	Si suma = num Entonces
		Escribir num, " es un número perfecto"
	Sino
		Escribir num, " no es un número perfecto"
	Fin Si
FinProceso
-----------------------------------------------------------------------------------------
39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	Proceso Ejercicio39
    Definir n, i como Entero
    Definir termino, piAproximado como Real
	
    Escribir "Ingrese la cantidad de términos para la aproximación de Pi:"
    Leer n
	
    piAproximado = 0
	
    Para i <- 1 hasta n Hacer
        termino = 4.0 / (2 * i - 1)
        Si (i MOD 2) = 0 Entonces
            piAproximado = piAproximado - termino
        Sino
            piAproximado = piAproximado + termino
        Fin Si
    Fin Para
	
    Escribir "La aproximación de Pi con ", n, " términos es:", piAproximado
FinProceso
----------------------------------------------------------------------------------------

40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...
	Proceso  Ejercicio40	
	Escribir "Ingrese la cantidad de terminos para la aproximacion de Pi: "
	Leer num
	pii=3.0
	para i=0 hasta num-1 con paso 1 Hacer
		denominador=(2*i+2)*(2*i+3)*(2*i+4)
		Si	i%2=0	Entonces
			pii=pii+4/denominador
		SiNo
			pii=pii-4/denominador
		FinSi
		
	FinPara
	Escribir "El valor aproximado de pi con " num "terminos es: " pii
	
FinProceso