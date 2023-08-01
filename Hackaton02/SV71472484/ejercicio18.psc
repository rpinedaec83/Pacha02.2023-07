// 18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a 
// vender calcule el precio total para el cliente y la ganancia para el vendedor.
Algoritmo ejercicio18
	Definir cantidad, total como Entero
    Escribir "Ingresar la cantidad de CDs a comprar"
	Leer cantidad
	
	Si cantidad <= 0 Entonces
		Escribir "Cantidad no válida"
	Sino Si cantidad >= 1 y cantidad <= 9 Entonces
			total = cantidad * 10
		FinSi
	FinSi
	Si cantidad >= 10 y cantidad <= 99 Entonces
		total = cantidad * 8
	Sino Si cantidad >= 100 y cantidad <= 499 Entonces
			total = cantidad * 7
		FinSi
	FinSi		
	Si cantidad >=500
		total = cantidad * 6
		
	FinSi
	Escribir "Total a Pagar Cliente: 	",total;
	Escribir "Ganancia del Vendedor:  ",total * 0.0825
FinAlgoritmo