// 4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Algoritmo ejercicio04

    Definir num1, num2, num3 Como Entero
	
    Escribir "Ingrese el primer numero: "
    Leer num1
    Escribir "Ingrese el segundo numero: "
    Leer num2
    Escribir "Ingrese el tercer numero: "
    Leer num3
	
    Si num1 <= num2 y num1 <= num3 Entonces
        Si num2 <= num3 Entonces
            Escribir "De menor a mayor: ",num1, ", ", num2, ", ", num3
        SiNo
            Escribir "De menor a mayor: ",num1, ", ", num3, ", ", num2
        FinSi
    SiNo
        Si num2 <= num1 y num2 <= num3 Entonces
            Si num1 <= num3 Entonces
                Escribir "De menor a mayor: ",num2, ", ", num1, ", ", num3
            SiNo
                Escribir "De menor a mayor: ",num2, ", ", num3, ", ", num1
            FinSi
        SiNo
            Si num1 <= num2 Entonces
                Escribir "De menor a mayor: ",num3, ", ", num1, ", ", num2
            SiNo
                Escribir "De menor a mayor: ",num3, ", ", num2, ", ", num1
            FinSi
        FinSi
    FinSi
	
FinAlgoritmo