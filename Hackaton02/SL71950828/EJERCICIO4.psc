//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso EJERCICIO4
	Definir  NumA, NumB,NumC Como Entero
	Escribir "Escribe tu Primer Numero"
	Leer NumA
	Escribir "Escribe tu Segundo Numero"
	Leer NumB
	Escribir "Escribe tu Tercer Numero"
	Leer NumC
	
	Si NumA < NumB y NumA < NumC Entonces
		menornumer <- NumA
		si NumB < NumC Entonces
			medionumer <- NumB
			mayornumer <- NumC
		SiNo
			mayornumer <- NumB
			medionumer <- NumC
		FinSi
	Sino 
		Si NumB < NumC
			menornumer <- NumB
			Si NumA < NumC
				medionumer <- NumA
				mayornumer <- NumC
			SiNo
				medionumer <- NumC
				mayornumer <- NumA
			FinSi
		SiNo
			menornumer <- NumC
			Si NumA < NumB
				medionumer <- NumA
				mayornumer <- NumB
			SiNo
				medionumer <- NumB
				mayornumer <- NumA
			FinSi

	
		FinSi
		
	FinSi
	Escribir "Tu numeros en orden de menor a mayor son:"
	Escribir "1.",menornumer;
	Escribir "2.",medionumer;
	Escribir "3.", mayornumer;
FinProceso
