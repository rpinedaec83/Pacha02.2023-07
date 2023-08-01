# Resolver los siguientes ejercicios

1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.

Algoritmo VerificarTresDigitos
    Definir numero, cantidadDigitos como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    cantidadDigitos = 0
    Mientras numero > 0 Hacer
        numero = trunc(numero / 10)
        cantidadDigitos = cantidadDigitos + 1
    Fin Mientras
	
    Si cantidadDigitos = 3 Entonces
        Escribir "El número tiene tres dígitos."
    Sino
        Escribir "El número NO tiene tres dígitos."
    Fin Si
Fin Algoritmo



2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.

Algoritmo DeterminarNegativo
    Definir numero como Entero

    Escribir "Ingrese un número entero:"
    Leer numero

    Si numero < 0 Entonces
        Escribir "El número es negativo."
    Sino
        Escribir "El número NO es negativo."
    Fin Si
Fin Algoritmo

3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Algoritmo DeterminarTerminaEn4
    Definir numero, ultimoDigito como Entero

    Escribir "Ingrese un número:"
    Leer numero

    ultimoDigito = numero % 10

    Si ultimoDigito = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número NO termina en 4."
    Fin Si
Fin Algoritmo


4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.


Algoritmo OrdenarTresNumeros
    Definir num1, num2, num3, menor, medio, mayor como Entero

    Escribir "Ingrese el primer número:"
    Leer num1

    Escribir "Ingrese el segundo número:"
    Leer num2

    Escribir "Ingrese el tercer número:"
    Leer num3

    // Encontrar el número menor
    Si num1 <= num2 y num1 <= num3 Entonces
        menor = num1
        Si num2 <= num3 Entonces
            medio = num2
            mayor = num3
        Sino
            medio = num3
            mayor = num2
        Fin Si
    Sino
        Si num2 <= num1 y num2 <= num3 Entonces
            menor = num2
            Si num1 <= num3 Entonces
                medio = num1
                mayor = num3
            Sino
                medio = num3
                mayor = num1
            Fin Si
        Sino
            menor = num3
            Si num1 <= num2 Entonces
                medio = num1
                mayor = num2
            Sino
                medio = num2
                mayor = num1
            Fin Si
        Fin Si
    Fin Si

    Escribir "Los números ordenados de menor a mayor son:", menor, ",", medio, ",", mayor
Fin Algoritmo

5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.


Algoritmo TiendaDeZapatos
    Definir cantidadZapatos, precioUnitario, descuento, totalPagar como Entero

    precioUnitario = 80

    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidadZapatos

    Si cantidadZapatos > 10 Entonces
        Si cantidadZapatos >= 30 Entonces
            descuento = 40
        Sino
            Si cantidadZapatos >= 20 Entonces
                descuento = 20
            Sino
                descuento = 10
            Fin Si
        Fin Si
    Sino
        descuento = 0
    Fin Si

    totalPagar = cantidadZapatos * precioUnitario * (100 - descuento) / 100

    Escribir "Total a pagar con descuento:", totalPagar
Fin Algoritmo




6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.


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



7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento



   Algoritmo TiendaDeHelados
    Definir tipoMembresia como Caracter
    Definir totalCompra, descuento, totalPagar como Real

    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia

    Escribir "Ingrese el monto total de la compra:"
    Leer totalCompra

    segun tipoMembresia hacer
        "A":
            descuento = 0.10
        "B":
            descuento = 0.15
        "C":
            descuento = 0.20
        De Otro Modo:
            Escribir "Tipo de membresía inválido. No se aplicará descuento."
            descuento = 0
    Fin Segun

    totalPagar = totalCompra * (1 - descuento)

    Escribir "Total a pagar con descuento:", totalPagar
Fin Algoritmo


8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Algoritmo CalcularPromedioYAprobar
    Definir nota1, nota2, nota3, promedio como Real

    Escribir "Ingrese la primera nota:"
    Leer nota1

    Escribir "Ingrese la segunda nota:"
    Leer nota2

    Escribir "Ingrese la tercera nota:"
    Leer nota3

    promedio = (nota1 + nota2 + nota3) / 3

    Escribir "El promedio es:", promedio

    Si promedio >= 6.0 Entonces
        Escribir "El estudiante ha aprobado."
    Sino
        Escribir "El estudiante ha reprobado."
    Fin Si
Fin Algoritmo


9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Algoritmo DeterminarAumentoTrabajador
    Definir salario, aumento como Real

    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario

    Si salario > 2000 Entonces
        aumento = salario * 0.05
    Sino
        aumento = salario * 0.10
    Fin Si

    Escribir "El aumento del trabajador es:", aumento
Fin Algoritmo


10. Hacer un algoritmo en Pseint que diga si un número es par o impar.


Algoritmo DeterminarParImpar
    Definir numero como Entero

    Escribir "Ingrese un número:"
    Leer numero

    Si numero % 2 = 0 Entonces
        Escribir "El número es par."
    Sino
        Escribir "El número es impar."
    Fin Si
Fin Algoritmo


11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Algoritmo VerificarTresDigitos
    Definir numero1, numero2, numero3, cantidadDigitos como Entero

    Escribir "Ingrese los  números:"
    Leer numero1
    Escribir "Ingrese los  números:"
    Leer numero2
    Escribir "Ingrese los  números:"
    Leer numero3
    cantidadDigitos = 0
    //Mientras numero1 > 0 Hacer
        //numero1 = trunc(numero / 10)
        //cantidadDigitos = cantidadDigitos + 1
    //Fin Mientras

    Si (numero1> numero2) & (numero1>numero3)  Entonces
        Escribir "El",numero1," es mayor"

    Sino
        si (numero2> numero1) & (numero2>numero3)
            Escribir "El",numero2," es mayor"

        Sino
            si (numero3> numero2) & (numero3>numero2)
                Escribir "El",numero3," es mayor"
            FinSi
        FinSi
        //Escribir "El número 3 es mayor "
    Fin Si
Fin Algoritmo

12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Algoritmo dosnumeros
    Definir numero1, numero2,  cantidadDigitos como Entero

    Escribir "Ingrese los  números:"
	Leer numero1
	Escribir "Ingrese los  números:"
	Leer numero2
	//Escribir "Ingrese los  números:"
	//Leer numero3
    cantidadDigitos = 0
    //Mientras numero1 > 0 Hacer
        //numero1 = trunc(numero / 10)
        //cantidadDigitos = cantidadDigitos + 1
    //Fin Mientras

    Si (numero1> numero2)   Entonces
        Escribir "El",numero1," es mayor"

    Sino
		Escribir "El", numero2, " es mayor"
			//si (numero3> numero2) & (numero3>numero2)
				//Escribir "El",numero3," es mayor"
			//FinSi
		//FinSi
        //Escribir "El número 3 es mayor "
    Fin Si
Fin Algoritmo



13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

Algoritmo vocaloconsonante
    Definir letra Como Caracter

    Escribir "Ingrese la letra:"
	Leer letra

	//Escribir "Ingrese los  números:"
	//Leer numero3

    //Mientras numero1 > 0 Hacer
	//numero1 = trunc(numero / 10)
	//cantidadDigitos = cantidadDigitos + 1
    //Fin Mientras

    Si (letra=='a' o letra =='e' o letra =='i' o letra =='o' o letra=='u')   Entonces
        Escribir "La  ",letra," es una vocal"

    Sino
		Escribir "La ", letra, " es una consonante"
		//si (numero3> numero2) & (numero3>numero2)
		//Escribir "El",numero3," es mayor"
		//FinSi
		//FinSi
        //Escribir "El número 3 es mayor "
    Fin Si
Fin Algoritmo



14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.


Algoritmo DeterminarNumeroPrimo
    Definir numero, divisor, contador como Entero
    Definir esPrimo como Logico

    Escribir "Ingrese un número entero positivo del 1 al 10 o el 9:"
    Leer numero

    esPrimo = Verdadero

    Si numero >= 1 y numero <= 10 o numero = 9 Entonces
        Si numero = 1 o numero = 9 Entonces
            esPrimo = Falso
        Sino
            divisor = 2
            Mientras divisor <= (numero - 1) Y esPrimo Hacer
                Si numero MOD divisor = 0 Entonces
                    esPrimo = Falso
                Fin Si
                divisor = divisor + 1
            Fin Mientras
        Fin Si

        Si esPrimo Entonces
            Escribir "El número es primo."
        Sino
            Escribir "El número NO es primo."
        Fin Si
    Sino
        Escribir "El número ingresado no cumple con los requisitos."
    Fin Si
Fin Algoritmo




15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Algoritmo ConvertirMedidas
    Definir centimetros, libras , pulgadas , kilogramos Como Real

    Escribir "Ingrese centimetros"
	Leer centimetros


	Escribir "Ingrese libras"
	Leer libras

	pulgadas=centimetros/2.54;
	kilogramos=2.205*libras;


        Escribir "La conversión de centímetros a pulgadas es :  ",pulgadas," ."


		Escribir "La conversión de libras a kilogramos es  :  ",kilogramos," ."
		//si (numero3> numero2) & (numero3>numero2)
		//Escribir "El",numero3," es mayor"
		//FinSi
		//FinSi

Fin Algoritmo

16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.

Algoritmo VerificarTresDigitos
    Definir numero1 Como Entero

    Escribir "Ingrese el número:"
	Leer numero

	Segun (numero) hacer
		(1):Escribir "Lunes"
		(2):Escribir "Martes"
		(3):Escribir "Miércoles"
		(4):Escribir "Jueves"
		(5):Escribir "Viernes"
		(6):Escribir "Sabado"
		(7):Escribir "Domingo"
		De Otro Modo:
			Escribir "Ingresar número válido"
    Fin Segun
Fin Algoritmo

17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.


Algoritmo HoraTiempo
    Definir hora, segundosxhora Como Real

    Escribir "Ingrese hora:"
	Leer hora


	segundosxhora= hora*3600




			Escribir "Segundos x hora ", segundosxhora

Fin Algoritmo

18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.


Algoritmo VentaProductos

	Definir cantidad  como Entero

	Definir  PrecioTotal como Real

	Definir Ganancia como Real


	cantidad = 0

	PrecioTotal=0

	Escribir "Ingrese cantidad de CDs:"

	Leer cantidad



	Si cantidad <=9  Entonces
		PrecioTotal= 10*cantidad
	Sino
		Si (cantidad>=10) & (cantidad<=99) Entonces
			PrecioTotal=8*cantidad
		SiNo
			Si (cantidad>=100) & (cantidad<=499) Entonces
				PrecioTotal=7*cantidad
			Sino
				PrecioTotal=6*cantidad
			FinSi
		FinSi
	Fin Si

	Ganancia= PrecioTotal*8.25

	Escribir "El Precio Total del Cliente: ", PrecioTotal

	Escribir "La ganancia del vendedor es: ",Ganancia

Fin Algoritmo



19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Algoritmo Heladeria
    Definir empleado, dia Como Entero
    Definir sueldo Como Real

    Escribir "Ingrese un número del 0 al 3"
    Leer empleado

    Escribir "Ingresar los días trabajados"
    Leer dia
    //dia=0


    si(dia <= 6) Entonces
        si(empleado == 0) Entonces
            sueldo = 56.0 * dia
        SiNo
            si(empleado == 1) Entonces
                sueldo = 64.0 * dia
            SiNo
                si(empleado == 2) Entonces
                    sueldo = 80.0 * dia
                SiNo
                    sueldo = 48.0 * dia
                FinSi
            FinSi

        FinSi
    SiNo
        Escribir "Días maximos son 6"
    FinSi

    Escribir "Cantidad de dinero a pagar: " , sueldo



Fin Algoritmo




20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Algoritmo OperacionesConNumeros
    Definir num1, num2, num3, num4 como Entero
    Definir suma, promedio como Real

    Escribir "Ingrese el primer número:"
    Leer num1

    Escribir "Ingrese el segundo número:"
    Leer num2

    Escribir "Ingrese el tercer número:"
    Leer num3

    Escribir "Ingrese el cuarto número:"
    Leer num4

    // Verificar si todos los números son diferentes
    Si num1 <> num2 y num1 <> num3 y num1 <> num4 y num2 <> num3 y num2 <> num4 y num3 <> num4 Entonces
        Escribir "Todos los números son diferentes."
    Sino
        Escribir "Al menos dos números son iguales."
    Fin Si

    // Calcular la suma de los 4 números
    suma = num1 + num2 + num3 + num4
    Escribir "La suma de los 4 números es:", suma

    // Calcular el promedio de los 4 números
    promedio = suma / 4
    Escribir "El promedio de los 4 números es:", promedio
Fin Algoritmo




21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Algoritmo CalcularFactorial
    Definir numero, factorial como Entero

    Escribir "Ingrese un número entero positivo:"
    Leer numero

    Si numero < 0 Entonces
        Escribir "El número debe ser positivo."
    Sino
        factorial = 1

        Para i <- 1 hasta numero Hacer
            factorial = factorial * i
        Fin Para

        Escribir "El factorial de", numero, "es:", factorial
    Fin Si
Fin Algoritmo

22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Algoritmo CalcularSumaNumeros
    Definir n, suma, i como Entero

    Escribir "Ingrese un número entero positivo:"
    Leer n

    Si n <= 0 Entonces
        Escribir "El número debe ser un entero positivo."
    Sino
        suma = 0

        Para i <- 1 hasta n Hacer
            suma = suma + i
        Fin Para

        Escribir "La suma de los", n, "primeros números enteros es:", suma
    Fin Si
Fin Algoritmo

23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Algoritmo CalcularSumaImpares
    Definir n, suma, i como Entero

    Escribir "Ingrese un número entero positivo:"
    Leer n

    Si n <= 0 Entonces
        Escribir "El número debe ser un entero positivo."
    Sino
        suma = 0

        Para i <- 1 hasta n Hacer
            Si i MOD 2 <> 0 Entonces
                suma = suma + i
            Fin Si
        Fin Para

        Escribir "La suma de los números impares menores o iguales a", n, "es:", suma
    Fin Si
Fin Algoritmo


24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Algoritmo SumaNumerosParesHastaMil
    Definir suma, numero como Entero

    suma = 0
    numero = 2

    Mientras numero <= 1000 Hacer
        suma = suma + numero
        numero = numero + 2
    Fin Mientras

    Escribir "La suma de todos los números pares hasta 1000 es:", suma
Fin Algoritmo

25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Algoritmo CalcularFactorial
    Definir numero, factorial como Entero

    Escribir "Ingrese un número entero positivo:"
    Leer numero

    Si numero < 0 Entonces
        Escribir "El número debe ser positivo."
    Sino
        factorial = 1
        i = 1

        Mientras i <= numero Hacer
            factorial = factorial * i
            i = i + 1
        Fin Mientras

        Escribir "El factorial de", numero, "es:", factorial
    Fin Si
Fin Algoritmo


26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Algoritmo CalcularRestoCociente
    Definir dividendo, divisor, cociente, resto como Entero

    Escribir "Ingrese el dividendo:"
    Leer dividendo

    Escribir "Ingrese el divisor:"
    Leer divisor

    Si divisor = 0 Entonces
        Escribir "Error: No se puede dividir entre cero."
    Sino
        cociente = 0
        resto = dividendo

        Mientras resto >= divisor Hacer
            resto = resto - divisor
            cociente = cociente + 1
        Fin Mientras

        Escribir "El cociente es:", cociente
        Escribir "El resto es:", resto
    Fin Si
Fin Algoritmo



27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Algoritmo CalcularMediaNumerosPositivos
    Definir numero, suma, contador como Entero
    Definir media como Real

    suma = 0
    contador = 0

    Escribir "Ingrese una lista de números positivos. Ingrese un número negativo para terminar."

    Escribir "Ingrese un número:"
    Leer numero

    Mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1

        Escribir "Ingrese un número:"
        Leer numero
    Fin Mientras

    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los números positivos ingresados es:", media
    Sino
        Escribir "No se ingresaron números positivos."
    Fin Si
Fin Algoritmo


28. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.


Algoritmo CalcularSumaPrimerosCienNumeros
    Definir suma, numero, contador como Entero

    suma = 0
    contador = 1

    Repetir
        suma = suma + contador
        contador = contador + 1
    Hasta que contador > 100

    Escribir "La suma de los primeros cien números es:", suma
Fin Algoritmo




29. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.

Algoritmo CalcularSumaPrimerosCienNumeros
    Definir suma, numero, contador como Entero

    suma = 0
    contador = 1

    Mientras contador <= 100 Hacer
        suma = suma + contador
        contador = contador + 1
    Fin Mientras

    Escribir "La suma de los primeros cien números es:", suma
Fin Algoritmo



30. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.


Algoritmo CalcularSumaPrimerosCienNumeros
    Definir suma, contador como Entero

    suma = 0

    Para contador <- 1 hasta 100 Hacer
        suma = suma + contador
    Fin Para

    Escribir "La suma de los primeros cien números es:", suma
Fin Algoritmo



31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.


Algoritmo CalcularMediaParesImpares
    Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares como Entero
    Definir mediaPares, mediaImpares como Real

    sumaPares = 0
    sumaImpares = 0
    contadorPares = 0
    contadorImpares = 0

    Para i <- 1 hasta 10 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero

        Si numero MOD 2 = 0 Entonces
            sumaPares = sumaPares + numero
            contadorPares = contadorPares + 1
        Sino
            sumaImpares = sumaImpares + numero
            contadorImpares = contadorImpares + 1
        Fin Si
    Fin Para

    Si contadorPares > 0 Entonces
        mediaPares = sumaPares / contadorPares
        Escribir "La media de los números pares es:", mediaPares
    Sino
        Escribir "No se ingresaron números pares."
    Fin Si

    Si contadorImpares > 0 Entonces
        mediaImpares = sumaImpares / contadorImpares
        Escribir "La media de los números impares es:", mediaImpares
    Sino
        Escribir "No se ingresaron números impares."
    Fin Si
Fin Algoritmo




32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

Algoritmo CiudadConMayorPoblacion
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
        Escribir "Con una población de ", maxPoblacion, " habitantes."
    Fin Para

    Escribir "La ciudad con mayor población de todas es: ", ciudadMayorPoblacion
    Escribir "Ubicada en la ", provinciaMayorPoblacion
    Escribir "Con una población de ", maxPoblacion, " habitantes."
Fin Algoritmo


33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Algoritmo ContinuarPrograma
    Definir continuar como Caracter

    Mientras continuar = 'S' o continuar = 's' Hacer
        Escribir "¡Hola! ¿Deseas continuar con el programa? (S/N): "
        Leer continuar

        Si continuar = 'S' o continuar = 's' Entonces
            // Aquí colocas el código que deseas que se ejecute cuando el usuario continúa
            Escribir "Continuando con el programa..."
        Sino
            Si continuar = 'N' o continuar = 'n' Entonces
                Escribir "Hasta luego. Programa finalizado."
            Sino
                Escribir "Opción inválida. Por favor, ingresa: S o N"
            Fin Si
        Fin Si
    Fin Mientras
Fin Algoritmo


34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.

Algoritmo TablasDeMultiplicar
    Definir numero, multiplicador, resultado como Entero

    Para numero <- 1 hasta 9 Hacer
        Escribir "Tabla de multiplicar del número ", numero, ":"
        Para multiplicador <- 1 hasta 10 Hacer
            resultado <- numero * multiplicador
            Escribir numero, " x ", multiplicador, " = ", resultado
        Fin Para
        Escribir "--------------------------"
    Fin Para

Fin Algoritmo



35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Algoritmo EncontrarMayorYMenor
    Definir numero, mayor, menor como Entero

    Escribir "Ingrese veinte números:"
    Leer numero
    mayor <- numero
    menor <- numero

    Para i <- 2 hasta 20 Hacer
        Leer numero

        Si numero > mayor Entonces
            mayor <- numero
        Fin Si

        Si numero < menor Entonces
            menor <- numero
        Fin Si
    Fin Para

    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor

Fin Algoritmo



36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Algoritmo SerieFibonacci
    Definir cantidad, i, numeroAnterior, numeroActual, siguienteNumero como Entero

    Escribir "Ingrese la cantidad de números de la serie de Fibonacci a calcular:"
    Leer cantidad

    Si cantidad <= 0 Entonces
        Escribir "La cantidad debe ser un número positivo."
	Fin Si


Si cantidad = 1 Entonces
	Escribir "0"
Sino Si cantidad = 2 Entonces
        Escribir "0, 1"
    Sino
        Escribir "0, 1"
        numeroAnterior <- 0
        numeroActual <- 1

        Para i <- 3 hasta cantidad Hacer
            siguienteNumero <- numeroAnterior + numeroActual
            Escribir ", ", siguienteNumero
            numeroAnterior <- numeroActual
            numeroActual <- siguienteNumero
        Fin Para
    Fin Si
	Fin Si

Fin Algoritmo


37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Algoritmo MCD_Euclides
    Definir num1, num2, resto como Entero

    Escribir "Ingrese el primer número:"
    Leer num1

    Escribir "Ingrese el segundo número:"
    Leer num2

    // Asegurarse de que num1 sea mayor o igual que num2
    Si num1 < num2 Entonces
        Definir temp como Entero
        temp <- num1
        num1 <- num2
        num2 <- temp
    Fin Si

    // Algoritmo de Euclides
    Mientras num2 > 0 Hacer
        resto <- num1 % num2
        num1 <- num2
        num2 <- resto
    Fin Mientras

    Escribir "El M.C.D de los números ingresados es:", num1
Fin Algoritmo



38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Algoritmo NumeroPerfecto
    Definir numero, sumaDivisores como Entero

    Escribir "Ingrese un número entero:"
    Leer numero

    sumaDivisores <- 0

    // Buscar los divisores propios del número
    Para divisor <- 1 hasta (numero - 1) Hacer
        Si numero % divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        Fin Si
    Fin Para

    // Verificar si el número es perfecto
    Si sumaDivisores = numero Entonces
        Escribir "El número", numero, "es un número perfecto."
    Sino
        Escribir "El número", numero, "NO es un número perfecto."
    Fin Si
Fin Algoritmo


39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Algoritmo AproximacionPi
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
Fin Algoritmo


40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...


    Algoritmo AproximacionPiNilakantha
    Definir n, i como Entero
    Definir termino, piAproximado como Real

    Escribir "Ingrese la cantidad de términos para la aproximación de Pi:"
    Leer n

    piAproximado = 3

    Para i <- 1 hasta n Hacer
        termino = 4.0 / ((2 * i) * (2 * i + 1) * (2 * i + 2))
        Si (i MOD 2) = 0 Entonces
            piAproximado = piAproximado - termino
        Sino
            piAproximado = piAproximado + termino
        Fin Si
    Fin Para

    Escribir "La aproximación de Pi con ", n, " términos es:", piAproximado
Fin Algoritmo
