// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, 
// hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
Algoritmo ejercicio32
	max_poblacion = 0
    ciudad_mas_poblada = ""
	
    Para i = 1 hasta 11
        Escribir "Ingrese el nombre de la ciudad " i ": "
        Leer nombre_ciudad
        Escribir "Ingrese la poblacion de la ciudad " i ": "
        Leer poblacion_ciudad
		
        Si poblacion_ciudad > max_poblacion Entonces
            max_poblacion = poblacion_ciudad
            ciudad_mas_poblada = nombre_ciudad
        Fin Si
    Fin Para
	
    Escribir "La ciudad con mayor poblacion es ", ciudad_mas_poblada, " con ", max_poblacion, " personas"
	
FinAlgoritmo