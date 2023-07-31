Proceso Modulo
	
    Definir resultado Como Cadena
	Definir opc Como Entero
	Definir ciclo Como Logico; ciclo <- Verdadero
	
	Escribir "BIENVENIDO AL MODULO DE REVISIÓN DE EJERCICIOS"
	Escribir "----------------------------------------------"
	Escribir "0 para SALIR!!"
	
	Mientras ciclo = Verdadero
		Escribir "Elija uno de los 40 ejercicios resueltos"
		Escribir "1-40" Sin Saltar; Leer opc
		Escribir ""
		Segun opc Hacer
			0: ciclo <- Falso
			1: Ejercicio1
			2: Ejercicio2
			3: Ejercicio3
			4: Ejercicio4
			5: Ejercicio5
			6: Ejercicio6
			7: Ejercicio7
			8: Ejercicio8
			9: Ejercicio9
			10: Ejercicio10
			11: Ejercicio11
			12: Ejercicio12
			13: Ejercicio13
			14: Ejercicio14
			15: Ejercicio15
			16: Ejercicio16
			17: Ejercicio17
			18: Ejercicio18
			19: Ejercicio19
			20: Ejercicio20
			21: Ejercicio21
			22: Ejercicio22
			23: Ejercicio23
			24: Ejercicio24
			25: Ejercicio25
			26: Ejercicio26
			27: Ejercicio27
			28: Ejercicio28
			29: Ejercicio29
			30: Ejercicio30
			31: Ejercicio31
			32: Ejercicio32
			33: Ejercicio33
			34: Ejercicio34
			35: Ejercicio35
			36: Ejercicio36
			37: Ejercicio37
			38: Ejercicio38
			39: Ejercicio39
			40: Ejercicio40
			De Otro Modo:
				Escribir "ERROR: Por favor solo escriba un numero entre el 1-40"
		FinSegun
		Escribir ""
	FinMientras
	Escribir "MUCHAS GRACIAS"
	Escribir "                        por Fabricio Oliva"
	
FinProceso
//INICIO----------INICIO----------INICIO----------INICIO----------INICIO----------INICIO----------INICIO----------INICIO----------INICIO// 
//1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10//
SubProceso Ejercicio1
	Definir num Como Entero
	Escribir "Ejercicio 1"
	Escribir "Comprobar si el numero tiene 3 digitos"
	Escribir "Ingresar numero" Sin Saltar; Leer num
    Si num < 100 Entonces
        Escribir  num," tiene MENOS de 3 digitos"
    Sino
        Si num > 999 Entonces
            Escribir  num," tiene MAS de 3 digitos"
        Sino
            Escribir num," tiene 3 digitos!"
        FinSi
    FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio2
	Definir num Como Entero
	Escribir "Ejercicio 2"
	Escribir "Comprobar si el numero es negativo"
	Escribir "Ingresar numero" Sin Saltar; Leer num
	Si num < 0 Entonces
		Escribir num," es negativo."
	SiNo
		Si num > 0 Entonces
			Escribir num," es positivo."
		SiNo
			Si num = 0 Entonces
				Escribir "El 0 no posee signo. No se puede determinar si es positivo o negativo."
			FinSi
		FinSi
	FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio3
	Definir num,residuo Como Entero
	Escribir "Ejercicio 3"
	Escribir "Determinar si el numero ingresado termina en 4"
	Escribir "Ingrese el numero" Sin Saltar; Leer num
	residuo = num MOD 10
	Si residuo es 4 Entonces
		Escribir num," termina en 4."
	SiNo
		Escribir num," NO termina en 4."
	FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio4
	Definir n1, n2, n3 Como Entero
	Escribir "Ejercicio 4"
	Escribir "Ordenar 3 numeros de menor a mayor"
	Escribir "Ingresar 1er numero"; Sin Saltar Leer n1
	Escribir "Ingresar 2do numero"; Sin Saltar Leer n2
	Escribir "Ingresar 3ro numero"; Sin Saltar Leer n3
	Si n1 < n2 Y n1 < n3 Entonces
		Escribir n1
		Si n2 < n3 Entonces
			Escribir n2
			Escribir n3
		SiNo
			Escribir n3
			Escribir n2
		FinSi
	SiNo
		Si n2 < n3
			Escribir n2
			Si n1 < n3
				Escribir n1
				Escribir n3
			SiNo
				Escribir n3
				Escribir n1
			FinSi
		SiNo
			Escribir n3
			Si n1 < n2
				Escribir n1
				Escribir n2
			SiNo
				Escribir n2
				Escribir n1
			FinSi
		FinSi
	FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio5
	Definir cant, desc, total, ahorro Como Entero
	Escribir "Ejercicio 5"
	Escribir "Algoritmo de calculo de descuento al por mayor"
	Escribir ""; Escribir ""
	Escribir "+++++Zapateria Total!+++++"; Escribir "Tabla de descuentos:"
	Escribir "10 zapatos o mas ----- 10% de DESCUENTO"
	Escribir "20 zapatos o mas ------- 20% de DESCUENTO"
	Escribir "30 zapatos o mas --------- 40% de DESCUENTO"
	Escribir "Cuantos zapatos piensa comprar?"
	Leer cant
	Si cant < 10
		desc <- 0
	SiNo
		Si cant = 10 o cant < 20
			desc <- 10
		SiNo
			Si cant = 20 o cant < 30 
				desc <- 20
			SiNo
				Si cant = 30 o cant > 30 
					desc <- 40
				FinSi
			FinSi
		FinSi
	FinSi
	ahorro <- (desc/100) * (cant * 80)
	total <- (cant * 80) - ahorro
	Escribir "Precio total:    $", cant*80
	Escribir "Descuento:       ", desc,"%"
	Escribir "Precio final:    $",total
	Escribir "Ahorrado:        -$",ahorro
	Escribir ""
	Escribir "Gracias por elegir a Zapateria total."
	Escribir "Mejor tienda al por mayor de calzado."
	Escribir ""
	
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio6
	Definir horas, sueldo Como Entero
	Escribir "Ejercicio 6"
	Escribir "Calcular sueldo semanal"
	Escribir "Cuantas horas trabajaste esta semana?"
	Leer horas
	Si horas < 40 o horas = 40 Entonces
		sueldo <- horas * 20
	SiNo
		sueldo <- ( (horas-40) * 25 ) + (40 * 20)
	FinSi
	Escribir "Horas al dia:       ", horas/5," horas"
	Escribir "Sueldo semanal:     $",sueldo
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio7
	Definir desc Como Entero; Definir tipo Como Caracter; Definir rep Como Logico
	Escribir "Ejercicio 7"
	Escribir "Algoritmo de descuento por membresia"
	Escribir "";Escribir ""
	Escribir "+++++Bienvenido a Heladeria Grido+++++"
	Escribir "Indique su membresia:"
	Escribir "A/B/C" Sin Saltar
	rep <- Verdadero
	Mientras rep = Verdadero Hacer
		Leer tipo
		Escribir ""
		Segun tipo
			"A" o "a": desc <- 10; rep <- Falso
			"B" o "b": desc <- 15; rep <- Falso
			"C" o "c": desc <- 20; rep <- Falso
			De Otro Modo:
				Escribir "Solo tenemos membresias tipo A, B y C"
				Escribir "Por favor indique su membresia de nuevo"
				Escribir "A/B/C" Sin Saltar
				rep <- Verdadero
		FinSegun
	FinMientras
	Escribir "Su taza de descuento es de ",desc,"%! Que afortunado!"
	Escribir "Muchas gracias por elegir Heladeria Grido."
	Escribir ""
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio8
	Definir n1,n2,n3,corte Como Entero; Definir nota Como Real
	Escribir "Ejercicio 8"
	Escribir "Calcular promedio de notas y determinar si aprobo"
	Escribir "Cuanto es el minimo de nota para aprobar?"
	Leer corte
	Escribir "Bien, ahora indique las notas del alumno"
	Escribir "Nota 1:" Sin Saltar; Leer n1
	Escribir "Nota 2:" Sin Saltar; Leer n2
	Escribir "Nota 3:" Sin Saltar; Leer n3
	nota <- (n1+n2+n3)/3
	nota <- redon(nota)
	Escribir "El promedio final del alumno es de ",nota," puntos."
	Si nota > corte o nota = corte Entonces
		Escribir "El alumno ha aprobado!"
	SiNo
		Escribir "El alumno NO ha aprobado"
	FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio9
	Definir sueldo, aumento Como Entero
	Escribir "Ejercicio 9"
	Escribir "Determinar el aumento"
	Escribir "Indique su sueldo actual:"
	Leer sueldo
	Si sueldo < 2000 Entonces
		aumento <- 10
	SiNo
		aumento <- 5
	FinSi
	Escribir ""
	Escribir "Anterior sueldo:           $",sueldo
	Escribir "Porcentaje de aumento:     ",aumento,"%"
	Escribir "Aumento:                   $",aumento/100 * sueldo
	Escribir "Nuevo sueldo:              $",sueldo + (aumento/100 * sueldo)
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio10
	Definir num Como Entero
	Escribir "Ejercicio 10"
	Escribir "Determinar si un numero es par o impar"
	Escribir "Ingrese el numero" Sin Saltar; Leer num
	Si num%2 = 0
		Escribir num," es par."
	SiNo
		Escribir num," es impar."
	FinSi
FinSubProceso
//1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10----------1-10//
//=======================================================================================================================================//
//11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20//
SubProceso Ejercicio11
	Definir n1, n2, n3 Como Entero
	Escribir "Ejercicio 11"
	Escribir "Determinar el numero mayor entre tres"
	Escribir "Ingresar 1er numero"; Sin Saltar Leer n1
	Escribir "Ingresar 2do numero"; Sin Saltar Leer n2
	Escribir "Ingresar 3ro numero"; Sin Saltar Leer n3
	Si n1 > n2 y n1 > n3 Entonces
		Escribir "El número mayor es: ",n1
	SiNo
		Si n2 > n3
			Escribir "El numero mayor es: ",n2
		SiNo
			Escribir "El numero mayor es: ",n3
		FinSi
	FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio12
	Definir n1, n2 Como Entero
	Escribir "Ejercicio 12"
	Escribir "Determinar el numero mayor"
	Escribir "Ingresar 1er numero"; Sin Saltar Leer n1
	Escribir "Ingresar 2do numero"; Sin Saltar Leer n2
	Si n1 > n2
		Escribir "El numero mayor es: ",n1
	SiNo
		Escribir "El numero mayor es: ",n2
	FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio13
	Definir letra Como Caracter
	Escribir "Ejercicio 13"
	Escribir "Determinar si la letra es consonante o vocal"
	Escribir "Ingresar" Sin Saltar; Leer letra
	Segun letra Hacer
		"a" o "A": Escribir "La letra ",letra," es una vocal."
		"e" o "E": Escribir "La letra ",letra," es una vocal."
		"i" o "I": Escribir "La letra ",letra," es una vocal."
		"o" o "O": Escribir "La letra ",letra," es una vocal."
		"u" o "U": Escribir "La letra ",letra," es una vocal."
		De Otro Modo:
			Escribir "La letra ",letra," es una consonante."
	FinSegun
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio14
	Definir num,cont Como Entero
	Escribir "Ejercicio 14"
	Escribir "Determinar si un numero del 1 - 10 es primo"
	Escribir "Ingresar numero"
	cont <- 0; rep <- Verdadero
	Mientras rep = Verdadero Hacer
		Leer num
		Si num <= 10 y num >= 1
			Para i <- 1 Hasta num Hacer
				Si num % i == 0
					cont <- cont + 1
				FinSi
			FinPara
			Si cont = 2 Entonces
				Escribir num," ES primo"
			SiNo
				Escribir num," NO es primo"
			FinSi
			rep <- Falso
		SiNo
			Escribir "Solo numeros entre el 1 y el 10"
		FinSi
	FinMientras
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio15
	Definir cent, pulg, lib, kil Como Real
	Definir opc Como Entero
	Escribir "Ejercicio 15"
	Escribir "Conversión de medidas"
	Escribir "1 para  centimetros -a-> pulgadas"
	Escribir "2 para     pulgadas -a-> centimetros"
	Escribir "3 para       libras -a-> kilogramos"
	Escribir "4 para   kilogramos -a-> libras"
	Leer opc
	Segun opc Hacer
		1:	Escribir "centimetros" Sin Saltar; Leer cent
			pulg <- cent/2.54
			Escribir cent," centimetros son: ",pulg," pulgadas"
		2:	Escribir "pulgadas" Sin Saltar; Leer pulg
			cent <- pulg*2.54
			Escribir lib,"libras son: ",cent," centimetros"
		3:  Escribir "libras" Sin Saltar; Leer lib
			kil <- lib/2.205
			Escribir lib," libras son: ",kil," kilogramos"
		4:  Escribir "kilogramos" Sin Saltar; Leer kil
			lib <- kil*2.205
			Escribir kil," kilogramos son: ",lib," libras"
		De Otro Modo:
			Escribir "ERROR: Opcion no valida."
	FinSegun
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio16
	Definir diaAño Como Entero
    Escribir "Ingrese un número del 1 al 365:" Sin Saltar; Leer diaAño
    Si diaAño >= 1 y diaAño <= 365 Entonces
        Definir diaMes Como Entero; Definir mes Como Caracter
        limiteEne = 31;limiteFeb = 28;limiteMar = 31;limiteAbr = 30
        limiteMay = 31;limiteJun = 30;limiteJul = 31;limiteAgo = 31
        limiteSep = 30;limiteOct = 31;limiteNov = 30;limiteDic = 31
        Si diaAño <= limiteEne Entonces
            mes <- "Enero"
            diaMes <- diaAño
        Sino
            Si diaAño <= limiteEne + limiteFeb Entonces
                mes <- "Febrero"
                diaMes <- diaAño - limiteEne
            Sino
                Si diaAño <= limiteEne + limiteFeb + limiteMar Entonces
                    mes <- "Marzo"
                    diaMes <- diaAño - (limiteEne + limiteFeb)
                Sino
                    Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr Entonces
                        mes <- "Abril"
                        diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar)
                    Sino
                        Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay Entonces
                            mes <- "Mayo"
                            diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr)
                        Sino
                            Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun Entonces
                                mes <- "Junio"
                                diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay)
                            Sino
                                Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul Entonces
                                    mes <- "Julio"
                                    diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun)
                                Sino
                                    Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo Entonces
                                        mes <- "Agosto"
                                        diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul)
                                    Sino
                                        Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep Entonces
                                            mes <- "Septiembre"
                                            diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo)
                                        Sino
                                            Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct Entonces
                                                mes <- "Octubre"
                                                diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep)
                                            Sino
                                                Si diaAño <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct + limiteNov Entonces
                                                    mes <- "Noviembre"
                                                    diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct)
                                                Sino
                                                    mes <- "Diciembre"
                                                    diaMes <- diaAño - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct + limiteNov)
                                                FinSi
                                            FinSi
                                        FinSi
                                    FinSi
                                FinSi
                            FinSi
                        FinSi
                    FinSi
                FinSi
            FinSi
        FinSi
        Escribir "El dia ", diaAño, " corresponde al ", diaMes, " de ", mes
    Sino
        Escribir "El numero ingresado no corresponde a un dia del año valido."
    FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio17
	Definir horas,seg Como Entero
	Escribir "Ejercicio 17"
	Escribir "Convertir horas a segundos"
	Escribir "Horas" Sin Saltar; Leer horas
	seg <- (horas*60) * 60
	Escribir horas," horas son ",seg," segundos"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio18
	Definir cant, prec, total Como Entero; Definir gan Como Real
	Escribir "Ejercicio 18"
	Escribir "Algoritmo"
	Escribir "";Escribir ""
	Escribir "+++++Tienda de CDs!+++++"; Escribir "Tabla de precios:"
	Escribir "Menos de 10 ------- $10/u"
	Escribir "10 o mas ---------- $8/u"
	Escribir "100 o mas --------- $7/u"
	Escribir "500 o mas --------- $6/u"
	Escribir ""
	Escribir "Cuantos CDs va a adquirir?"
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
					Escribir "ERROR: Cantidad inválida"
				FinSi
			FinSi
		FinSi
	FinSi
	total <- cant*prec; gan <- 8.25/100 * total
	Escribir "Precio total:        $",total
	Escribir "Precio x unidad:     $",prec
	Escribir "Ganancia:           +$",gan
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio19
	Escribir "+++++Zapateria Total!+++++"; Escribir "Tabla de descuentos:"
	Escribir "10 zapatos o mas ----- 10% de DESCUENTO"
	Escribir "20 zapatos o mas ------- 20% de DESCUENTO"
	Escribir "30 zapatos o mas --------- 40% de DESCUENTO"
	Escribir "Cuantos zapatos piensa comprar?"
	Leer cant
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio20
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20//
//============================================================================================================================================//
//21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30//
SubProceso Ejercicio21
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio22
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio23
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio24
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio25
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio26
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio27
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio28
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio29
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio30
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30//
//============================================================================================================================================//
//31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40//
SubProceso Ejercicio31
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR// 
SubProceso Ejercicio32
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio33
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio34
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio35
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio36
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR// 
SubProceso Ejercicio37
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR// 
SubProceso Ejercicio38
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio39
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio40
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40//
//FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL// 






