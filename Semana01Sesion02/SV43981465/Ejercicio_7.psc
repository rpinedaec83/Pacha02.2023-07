//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con 
// membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
// Los descuentos son los siguientes:
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento
Proceso Helados_con_membresia
	Definir th,sh,m,p Como Entero
	Definir pd Como Real
	Definir pr,s Como Caracter
	Escribir "Bienvenido a la heladeria speciale"
	Escribir "----------------------------------"
	Escribir "Elija el tipo de helado:"
	Escribir ""
    Escribir "1) Cono - $5"
    Escribir "2) Paleta - $2"
    Escribir "3) Vasito - $8"
    Escribir "4) Litro - $15"
	Leer th
	Escribir "Elija el sabor de helado:"
    Escribir "1) Chocolate"
    Escribir "2) Fresa"
    Escribir "3) Vainilla"
    Escribir "4) Tricolor"
	Leer sh
	Escribir "Indique que membresia tiene:"
	Escribir "1) A"
    Escribir "2) B"
    Escribir "3) C"
    Escribir "4) No tengo"
	Leer m
	
	Segun th Hacer
        1: 
            p = 5
			pr = "el cono"
        2: 
            p = 2
			pr = "la paleta"
        3: 
            p = 8
			pr = "el vasito"
        4: 
            p = 15
			pr = "el litro"
        De Otro Modo:
            Escribir "Opción inválida."
    FinSegun
	
	Segun sh Hacer
        1: 
            s = "Chocolate"
        2: 
            s = "Fresa"
        3: 
            s = "Vainilla"
        4: 
            s = "Tricolor"
        De Otro Modo:
            Escribir "Opción inválida."
    FinSegun
	
	Segun m Hacer
        1: 
            pd = p*0.9
        2: 
            pd = p*0.85
        3: 
            pd = p*0.8
        4: 
            pd = p
        De Otro Modo:
            Escribir "Opción inválida."
    FinSegun
	
	Escribir "El precio por ",pr," de helado, con sabor a ",s," es de $",pd
	
FinProceso
