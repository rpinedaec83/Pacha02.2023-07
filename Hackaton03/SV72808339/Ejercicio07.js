/*
7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus 
clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, 
tipo A, tipo B y tipo C. Los descuentos son los siguientes:
Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento
*/

const membresía = "A";
let descuento = 0;
switch (membresía) {
    case "A" || "a":
        descuento = 10;
        break;
    case "B" || "b":
        descuento = 15;
        break;
    case "C" || "c":
        descuento = 20;
        break;
    default: console.log("Solo membresías tipo A, B o C")
        break;
}

console.log("Su membresía tipo",membresía,"le da un:",descuento+"%","de descuento en la tienda.")