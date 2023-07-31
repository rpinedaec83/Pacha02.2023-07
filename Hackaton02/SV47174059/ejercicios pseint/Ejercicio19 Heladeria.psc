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