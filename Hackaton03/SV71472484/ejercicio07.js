// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

let respuesta = prompt("Ingrese Precio del Helado:")
let precio = parseInt(respuesta)
let membresia = prompt("Ingrese el Tipo de Membresia (A, B o C):")
let descuento = 0
let desme = ""
let total = 0

switch (membresia) {
    case "A":
        descuento = precio * 0.1
        desme = '10%'
        break;
    case "B":
        descuento = precio * 0.15
        desme = '15%'
        break;
    case "C":
        descuento = precio * 0.2
        desme = '20%'
        break;
    default:
        document.write("<b>Error en Tipo de Membresia</b><br>")
        descuento = 0
        desme = "-"
        precio = 0
        break;
}

total = precio - descuento

document.write("Precio del Helado : "+precio+"<br>")
document.write("Tipo de Membresia : "+membresia+"<br>")
document.write("Descuento por membresia: "+desme+"<br>")
document.write("Total con descuento: $"+total+"<br>")
