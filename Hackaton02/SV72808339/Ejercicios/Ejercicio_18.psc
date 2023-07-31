//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta.
//Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia
//para el vendedor.

Proceso Ejercicio_18
	
	Definir cant, prec, total Como Entero
	Definir gan Como Real
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
					Escribir "Debe ser un número entero positivo"
				FinSi
			FinSi
		FinSi
	FinSi
	
	total <- cant*prec
	gan <- 8.25/100 * total
	
	Escribir "Precio total: ",total
	Escribir "Ganancia: ",gan
FinProceso
	