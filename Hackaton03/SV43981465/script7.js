// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes 
// con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
// Los descuentos son los siguientes:
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento

function descuentoxMembresia(precio, tipoMembresia){
    let descuento = 0;
    switch(tipoMembresia){
        case 'A':
            descuento = 0.1;
            break;
        case 'B':
            descuento = 0.15;
            break;
        case 'C':
            descuento = 0.2;
            break;
        default:
            alert("Tipo de membresia no válido. Se aplicará el precio sin descuento.");
    }
    const precioConDescuento = precio * (1-descuento);
    return precioConDescuento;
}

const precioHelado = 100;
let tipoMembresiaCliente = prompt("Ingrese la membresia que pertenece (A, B o C):");
const precioFinal = descuentoxMembresia(precioHelado, tipoMembresiaCliente);
alert("El precio a pagar con el descuento es de: "+precioFinal.toFixed(2));