// 5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para 
// vender al x mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de 
// descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le 
// otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
// El precio de cada zapato es de $80.
Proceso Promocion_compras_al_por_mayor
	Definir n,v Como Entero
	Definir d,t Como Real
	Escribir "Bienvenido a la tienda de zapatos"
	Escribir "---------------------------------"
	Escribir "Cada zapato vale $80 y tendrá un descuento distinto, de acuerdo a la cantidad de zapatos: "
	Escribir "- Si se lleva más de 10 zapatos, se le dará un 10% de descuento del total de monto."
	Escribir "- Si se lleva entre 21 a 30 zapatos, se le dará un 20% de descuento del total de monto."
	Escribir "- Si se lleva más de 30 zapatos, se le dará un 40% de descuento del total de monto."
	Escribir "Por favor indicar la cantidad de zapatos que desea llevar: "
	Leer n
	v = n*80
	Si n > 30 Entonces
		Escribir "Tiene 40% de descuento"
		d = v*0.4
		t = v - d
	Sino
		Si n > 20 y n < 31 Entonces
			Escribir "Tiene 20% de descuento"
			d = v*0.2
			t = v - d
		SiNo
			Si n > 10 y n < 21 Entonces
				Escribir "Tiene 10% de descuento"
				d = v*0.1
				t = v - d
			Sino 
				Escribir "No tiene descuento"
				t = v
			FinSi
		FinSi
	FinSi
	Escribir "El monto a pagar es de $",t
	Escribir "Su descuento es de $",d
	
FinProceso
