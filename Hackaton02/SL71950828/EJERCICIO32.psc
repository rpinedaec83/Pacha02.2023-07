//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
Proceso EJERCICIO32
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
	
    Escribir "La ciudad con mayor población de todas es: ", ciudadMayorPoblacion
    Escribir "Ubicada en la ", provinciaMayorPoblacion
    Escribir "La poblacion es de  ", maxPoblacion, " habitantes."
FinProceso
