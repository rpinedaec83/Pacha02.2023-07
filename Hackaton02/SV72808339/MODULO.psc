Proceso Modulo
	
	Definir opc Como Entero
	Definir ciclo Como Logico; ciclo <- Verdadero
	
	Escribir "BIENVENIDO AL MODULO DE REVISIÓN DE EJERCICIOS"
	Escribir "----------------------------------------------"
	Escribir "0 para SALIR!!"
	
	Repetir
		Escribir "Elija uno de los 40 ejercicios resueltos"
		Escribir "1-40" Sin Saltar; Leer opc
		Escribir ""
		Segun opc Hacer
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
	Hasta Que opc = 0
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
	Escribir "+++++ Zapateria Total! +++++"; Escribir "Tabla de descuentos:"
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
	
	Escribir "Ejercicio 17"
	Escribir "Mostrar hora despues de un segundo"
	Definir hora, min, seg Como Entero
	Definir H, M, S Como Caracter
	Repetir
		Escribir "Hora" Sin Saltar; Leer hora
		H <- ConvertirATexto(hora)
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
	Escribir "Hora ingresada:"
	Escribir H,":",M,":",S
	seg <- seg + 1
	Si seg = 60
		S <- "00"
		min <- min + 1
		Si min = 60
			M <- "00"
			hora <- hora + 1
			Si hora = 24
				H <- "00"
			FinSi
		FinSi
	FinSi
	Escribir "La hora después de un segundo: "
	Escribir H,":",M,":",S
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio18
	Definir cant, prec, total Como Entero; Definir gan Como Real
	Escribir "Ejercicio 18"
	Escribir "Algoritmo"
	Escribir "";Escribir ""
	Escribir "+++++ Tienda de CDs! +++++"; Escribir "Tabla de precios:"
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
	Definir tipo,dias,sueldo Como Entero
	Definir rep Como Logico
	Escribir "Ejericcio 19"
	Escribir "Algoritmo para calcular sueldo semanal de trabajador"
	Escribir "+++++ Heladeria Grido +++++"; Escribir "Programa de administración de sueldos"
	Escribir "Tabla de trabajadores:"
	Escribir "1. Cajero ---------------------- $56/dia"
	Escribir "2. Servidor -------------------- $64/dia"
	Escribir "3. Preparador de mezclas ------- $80/dia"
	Escribir "4. Mantenimiento --------------- $48/dia"
	Escribir "Trabador" Sin Saltar; Leer tipo
	Segun tipo
		1: sueldo <- 56
		2: sueldo <- 64
		3: sueldo <- 80
		4: sueldo <- 48
	FinSegun
	rep <- Verdadero
	Mientras rep = Verdadero
		Escribir "Dias" Sin Saltar; Leer dias
		Si dias <= 6 y dias >= 1
			rep <- Falso
		SiNo
			Escribir "Máximo 6 días"
			rep <- Verdadero
		FinSi
	FinMientras
	Escribir ""
	Escribir "Pago por dia:      $", sueldo
	Escribir "Trabaja ",dias," dias a la semana"
	Escribir "Sueldo:            $",dias * sueldo
	Escribir ""
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio20
	Dimension numbers[4]
	Escribir "Ejercicio 20"
	Escribir "Algoritmo de condiciones"
	Escribir "Ingrese 4 numeros"
	Para i<-1 Hasta 4
		Escribir "N",i Sin Saltar; Leer numbers[i]
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
FinSubProceso
//11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20----------11-20//
//============================================================================================================================================//
//21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30//
SubProceso Ejercicio21
	Definir num,fact Como Entero
	Escribir "Ejercicio 21"
	Escribir "Calcular el factorial de un numero"
	Escribir "Ingrese el numero" Sin Saltar; Leer num
	fact <- 1
	Para i<-num Hasta 1 Con Paso -1
		fact <- fact * i
	FinPara
	Escribir "El factorial de ",num," es ",fact
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio22
	Definir num, suma Como Entero
	Escribir "Ejercicio 22"
	Escribir "Calcular la suma de los primeros n numeros"
	Escribir "Ingrese el numero" Sin Saltar; Leer num
	Para i<-0 Hasta num
		suma <- suma + i
	FinPara
	Escribir "La suma de todos es ",suma
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio23
	Definir num, suma Como Entero
	Escribir "Ejercicio 23"
	Escribir "Sumar todos los impares menores o iguales a n"
	Escribir "Ingresa el valor de n"
	Leer num
	suma <- 0
	Para i<-0 Hasta num
		Si i % 2 <> 0
			suma <- suma + i
		FinSi
	FinPara
	Escribir "El resultado de la suma es ",suma
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio24
	Definir suma Como Entero
	Escribir "Ejercicio 24"
	Escribir "Determinar la suma de todos los pares hasta el 1000"
	suma <- 0
	Para i<-0 Hasta 1000
		Si i % 2 == 0
			suma <- suma + i
		FinSi
	FinPara
	Escribir ""
	Escribir "Todos los numeros pares hasta el 1000 suman: ",suma
	Escribir ""
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio25
	Definir num,fact Como Entero
	Escribir "Ejercicio 25"
	Escribir "Calcular el factorial de un numero de forma distinta"
	Escribir "Ingrese el numero" Sin Saltar; Leer num
	fact <- 1
	Para i<-1 Hasta num
		fact <- fact * i
	FinPara
	Escribir fact, " es el factorial de ",num
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio26
	Definir div, dis,free, coci, res Como Entero
	Escribir "Ejercicio 26"
	Escribir "Calcular resto y cociente mediante restas sucesivas"
	Escribir "Indique los numeros que quiere dividir"
	Escribir "Dividendo" Sin Saltar; Leer div
	Escribir "Divisor  " Sin Saltar; Leer dis
	free <- div
	Repetir
		
		free <- free - dis
		coci <- coci + 1
		
	Hasta Que free - dis < 0
	Escribir "Resto:        ", free
	Escribir "Cociente:     ", coci
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio27
	Escribir "Ejercicio 27"
	Escribir "Calcular la media de una cantidad indefinida de numeros"
	Escribir "Ingresar un negativo para parar y obtener el resultado"
	cont <- 0
	Repetir
		Escribir "N",cont+1 Sin Saltar ; Leer num
		Si num > 0
			sum <- sum + num
			cont <- cont + 1
		FinSi
	Hasta Que num < 0 
	Escribir "La media de los ",cont," numeros es: ",redon(sum/cont)
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio28
	Escribir "Ejercicio 28"
	Escribir "Algoritmo para sumar los primeros 100 numeros con un ciclo repetir"
	Repetir
		num <- num + 1
		suma <- suma + num
	Hasta Que num = 100
	Escribir "La suma resultó ser: ",suma
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio29
	Escribir "Ejercicio 29"
	Escribir "Algoritmo para sumar los primeros 100 numeros con un ciclo mientras"
	rep <- Verdadero
	Mientras rep = Verdadero
		num <- num + 1
		suma <- suma + num
		Si num = 100
			rep <- Falso
		FinSi
	FinMientras
	Escribir "La suma resultó ser: ",suma
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio30
	Escribir "Ejericio 30"
	Escribir "Algoritmo para sumar los primeros 100 numeros con un ciclo para"
	Para i<-0 Hasta 100
		sum <- sum + i
	FinPara
	Escribir "La suma resultó ser: ",sum
FinSubProceso
//21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30----------21-30//
//============================================================================================================================================//
//31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40//
SubProceso Ejercicio31
	Escribir "Ejercicio 31"
	Escribir "Determinar media par e impar de 10 numeros"
	Dimension num[10]
	Para i<-1 Hasta 10
		Escribir "N",i Sin Saltar; Leer num[i] Sin Saltar;
		Si num[i] % 2 == 0
			Escribir "                 PAR"
			sumaPar <- sumaPar + num[i]
			pares <- pares + 1
		SiNo
			Escribir "                 IMPAR"
			sumaImpar <- sumaImpar + num[i]
			impares <- impares + 1
		FinSi
	FinPara
	Escribir ""
	Escribir "Hay ",pares," pares y ",impares," impares"
	Escribir "Media PAR:    ",sumaPar/pares
	Escribir "Media IMPAR:  ",sumaImpar/impares
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR// 
SubProceso Ejercicio32
	Escribir "AUN EN DESARROLLO"
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio33
	Definir secreto Como Caracter
	Escribir "Ejercicio 33"
	Escribir "Mantener el programa vivo."
	Escribir ""
	Escribir "Este programa seguira funcionando hasta que digas nuestra palabra secreta"
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
			Si fed = "Federico" o fed = "federico" o fed = "FEDERICO"
				Escribir "De verdad me puedo llamar ",fed,"? MUCHAS GRACIAS ME ENCANTA EL NOMBRE!! :D"
				Escribir "Eres el mejor ",nombre,"!!!"
			SiNo
				Escribir "Wow! ",fed," es un nombre increible! Me encanta tu imaginacion"
				Escribir "Me siento especial ahora que tengo un nombre"
			FinSi
		"NO" o "no" o "No":
			Escribir "Oh... :( claro, realmente no tengo necesidad de un nombre"
			Escribir "Pero esta bien :)"
	FinSegun
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
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio34
	Escribir "Ejercicio 34"
	Escribir "Mostrar la tabla de multiplicar del 1 al 9"
	Escribir ""
	Para i <- 1 Hasta 9
		Escribir "1 x ",i," = ",i * 1,"     " Sin Saltar; 
		Escribir "2 x ",i," = ",i * 2,"     " Sin Saltar;
		Escribir "3 x ",i," = ",i * 3," "
	FinPara; Escribir ""
	Para i <- 1 Hasta 9
		Escribir "4 x ",i," = ",i * 4,"     " Sin Saltar; 
		Escribir "5 x ",i," = ",i * 5,"     " Sin Saltar;
		Escribir "6 x ",i," = ",i * 6," "
	FinPara; Escribir ""
	Para i <- 1 Hasta 9
		Escribir "7 x ",i," = ",i * 7,"     " Sin Saltar;
		Escribir "8 x ",i," = ",i * 8,"     " Sin Saltar;
		Escribir "9 x ",i," = ",i * 9," "
	FinPara
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio35
	Escribir "Ejercicio 35"
	Escribir "De 20 numeros determinar el mayor y el menor"
	Definir may,men Como Real
	Dimension num[20]
	Escribir "Ingrese los 20 numeros:"
	Para i<-1 Hasta 20
		Escribir "N",i Sin Saltar; Leer num[i]
	FinPara
	may <- 0
	Para i<-1 Hasta 20
		Si num[i] > may Entonces
			may <- num[i]
		FinSi
	FinPara
	men <- num[1]
	Para i<-2 Hasta 20
		Si num[i] < men Entonces
			men <- num[i]
		FinSi
	FinPara
	Escribir "El numero mayor es: ",may
	Escribir "El numero menor es: ",men
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio36
	Escribir "Ejercicio 36"
	Escribir "Calcular serie de Fibonacci"
	Definir num,a,b,c Como Entero
	Escribir "Ingrese hasta que numero de la serie de Fibonacci quiere ver:"
	Leer num
	a = 1; b = 1
	Para i<-0 Hasta num
		Escribir A," " Sin Saltar
		c = a + b
		a = b
		b = c
	FinPara
	Escribir ""
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR// 
SubProceso Ejercicio37
	Escribir "Ejercicio 37"
	Escribir "Conseguir el M.C.D."
	Escribir "Ingrese los numeros"
	Leer a,b
	Mientras b <> 0
		temp <- b
		b <- a % b
		a <- temp
	FinMientras
	mcd <- a
	Escribir "El MCD es: ",mcd
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR// 
SubProceso Ejercicio38
	Escribir "Ejercicio 38"
	Escribir "Determinar si el numero es perfecto"
	Escribir "Ingrese un numero"
	Escribir "Numero" Sin Saltar; Leer num
	sum <- 0
	Para i <- 1 hasta num/2
		Si num % i == 0
			sum <- sum + i
		FinSi
	FinPara
	Si sum = num
		Escribir num," ES un numero perfecto"
	SiNo
		Escribir num," NO es un numero perfecto"
	FinSi
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio39
	Escribir "Ejercicio 39"
	Escribir "Aproximación de pi Gregory-Leibniz"
	Leer num
	den <- 1
	Para i<-0 Hasta num-1
		Si i%2 = 0
			pid <- pid + 4/den
		SiNo
			pid <- pid - 4/den
		FinSi
		den <- den + 2
	FinPara
	Escribir "La aproximacion es: ",pid 
FinSubProceso
//DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR----------DIVISOR//
SubProceso Ejercicio40
	Escribir "Ejercicio 40"
	Escribir "Aproximacion de pi Nilakantha"
	Definir aprox, actual, pre, sum Como Real
	Definir signo,a,stop Como Entero
	aprox <- 3; signo <- 1; stop <- 0; a <- 2
	Escribir "Precision" Sin Saltar;
	Leer pre
	Mientras stop == 0
		actual <- 4.0 / (a * (a+1) * (a+2)) * signo
		sum <- sum + actual
		Si Abs(actual) < pre
			stop <- 1
		FinSi
		signo <- signo * (-1)
		a <- a + 2
	FinMientras
	aprox <- aprox + sum
	Escribir "La aproximacion es: ",aprox
FinSubProceso
//31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40----------31-40//
//FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL----------FINAL// 






