Funcion salario_hora(dia, empleado, sueldo)
	
    si(dia <= 6) Entonces
        si(empleado == 0) Entonces
            sueldo <- 56.0 * dia
        SiNo
            si(empleado == 1) Entonces
                sueldo <- 64.0 * dia
            SiNo
                si(empleado == 2) Entonces
                    sueldo <- 80.0 * dia
                SiNo
                    sueldo <- 48.0 * dia
                FinSi
            FinSi
			
        FinSi
    SiNo
        Escribir "Días maximos son 6"
    FinSi
	
	Escribir "Sueldo del empleado, s/." , sueldo
	
	sueldo <- sueldo
	
FinFuncion

Algoritmo problema_19
    Definir empleado, dia Como Entero
    Definir sueldo Como Real
	
	Escribir "Ingresar los días trabajados"
    Leer dia
    
    Escribir "Ingrese un número del 0 al 3"
    Leer empleado
	
	salario_hora(dia, empleado, sueldo)

	
Fin Algoritmo