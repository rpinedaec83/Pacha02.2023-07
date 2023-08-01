//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. 
// Los precios son:
//	$10. Si se compran unidades separadas hasta 9.
//	$8. Si se compran entre 10 unidades hasta 99.
//	$7. Entre 100 y 499 unidades.
//	$6. Para mas de 500 unidades.
//	La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número
// de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
Proceso Tienda_CD
	Definir n Como Entero
	Definir v,g Como Real
	Escribir "Bienvenido a la tienda de CD Vírgenes"
	Escribir "-------------------------------------"
	Escribir "Cada CD vale $10 y tendrá un descuento distinto, de acuerdo a la cantidad de CD: "
	Escribir "- Si se lleva entre 10 a 99 CD, el costo de cada CD es de $8."
	Escribir "- Si se lleva entre 100 a 499 CD, el costo de cada CD es de $7."
	Escribir "- Si se lleva más de 500 CD, el costo de cada CD es de $6."
	Escribir "Por favor indicar la cantidad de CD que desea llevar: "
	Leer n
	
	Si n >= 500 Entonces
		v = n*6
		g = v*0.0825
	Sino
		Si n >= 100 y n < 500 Entonces
			v = n*7
			g = v*0.0825 
		SiNo
			Si n >= 10 y n < 100 Entonces
				v = n*8
				g = v*0.0825 
			Sino 
				v = n*10
				g = v*0.0825
			FinSi
		FinSi
	FinSi
	
	Escribir "El monto a pagar es de $",v
	Escribir "La ganancia del vendedor es de $",g
FinProceso
