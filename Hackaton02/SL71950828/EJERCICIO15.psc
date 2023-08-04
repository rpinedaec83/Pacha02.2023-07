// Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso  EJERCICIO15
    Definir cent, pulg, libr, kg Como Real
	
    Escribir "De Centimetros a Pulgadas:"
    Leer cent
    pulg = trunc(cent / 2.54)
    Escribir cent, " centímetros equivalen a ", pulg, " pulgadas."
	
    Escribir "De  Libras a Kilogramos:"
    Leer libr
    kg = trunc(libr * 0.453592)
    Escribir lib, " libras equivalen a ", kg, " kilogramos."
FinProceso
