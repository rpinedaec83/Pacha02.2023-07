// 9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 
// tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Algoritmo ejercicio09

    Definir salario, aumento Como Real
	
    Escribir "Ingrese el salario del trabajador: "
    Leer salario
	
    Si salario > 2000 Entonces
        aumento = salario * 0.05
    SiNo
        aumento = salario * 0.1
    FinSi
	
    salario = salario + aumento
    Escribir "El nuevo salario del trabajador es: ", salario
	
FinAlgoritmo