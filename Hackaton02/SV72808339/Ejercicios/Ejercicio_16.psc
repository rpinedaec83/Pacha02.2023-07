//Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.

Algoritmo DiaDelAnio
    Definir DiaAno Como Entero
	
    Escribir "Ingrese un número del 1 al 365:"
    Leer DiaAno
	
    Si DiaAno >= 1 y DiaAno <= 365 Entonces
        Definir diaComoMes Como Entero
		Definir mes Como Caracter
		
        // Definir los límites de días por mes (no se consideran años bisiestos)
        limiteEne = 31
        limiteFeb = 28
        limiteMar = 31
        limiteAbr = 30
        limiteMay = 31
        limiteJun = 30
        limiteJul = 31
        limiteAgo = 31
        limiteSep = 30
        limiteOct = 31
        limiteNov = 30
        limiteDic = 31
		
        // Calcular el mes y el día correspondiente al día del año
        Si DiaAno <= limiteEne Entonces
            mes <- "Enero"
            diaComoMes <- DiaAno
        Sino
            Si DiaAno <= limiteEne + limiteFeb Entonces
                mes <- "Febrero"
                diaComoMes <- DiaAno - limiteEne
            Sino
                Si DiaAno <= limiteEne + limiteFeb + limiteMar Entonces
                    mes <- "Marzo"
                    diaComoMes <- DiaAno - (limiteEne + limiteFeb)
                Sino
                    Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr Entonces
                        mes <- "Abril"
                        diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar)
                    Sino
                        Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay Entonces
                            mes <- "Mayo"
                            diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr)
                        Sino
                            Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun Entonces
                                mes <- "Junio"
                                diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay)
                            Sino
                                Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul Entonces
                                    mes <- "Julio"
                                    diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun)
                                Sino
                                    Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo Entonces
                                        mes <- "Agosto"
                                        diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul)
                                    Sino
                                        Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep Entonces
                                            mes <- "Septiembre"
                                            diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo)
                                        Sino
                                            Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct Entonces
                                                mes <- "Octubre"
                                                diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep)
                                            Sino
                                                Si DiaAno <= limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct + limiteNov Entonces
                                                    mes <- "Noviembre"
                                                    diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct)
                                                Sino
                                                    mes <- "Diciembre"
                                                    diaComoMes <- DiaAno - (limiteEne + limiteFeb + limiteMar + limiteAbr + limiteMay + limiteJun + limiteJul + limiteAgo + limiteSep + limiteOct + limiteNov)
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
		
        // Mostrar el resultado
        Escribir "El día ", DiaAno, " corresponde al ", diaComoMes, " de ", mes
    Sino
        Escribir "El número ingresado no corresponde a un día del año válido."
    FinSi
FinAlgoritmo
