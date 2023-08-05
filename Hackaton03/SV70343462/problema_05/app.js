
let descuento;
let totalPago;
let precio;
let cantidad;

cantidad = prompt("Ingresar cantidad de zapatos");
precio = 80.0;

totalCompra = precio * cantidad;

if (cantidad > 10 && cantidad <=20) {
    descuento = totalCompra * 0.10;
}
else if (cantidad > 20 && cantidad < 30) {
    descuento = totalCompra * 0.20;
}
else if (cantidad >= 30) {
    descuento = totalCompra * 0.40;
}
else {
    descuento = 0;
}


totalPago = totalCompra - descuento;


document.querySelector('.cantidad').innerHTML = `Cantidad: ${cantidad}`;
document.querySelector('.precio').innerHTML = `Precio por unidad: s/.${precio}`;
document.querySelector('.totalCompra').innerHTML = `Importe de pago: s/.${totalCompra}`;
document.querySelector('.descuento').innerHTML = `Importe de descuento: s/.${descuento}`;
document.querySelector('.totalPago').innerHTML = `Total a pagar: s/.${totalPago}`;