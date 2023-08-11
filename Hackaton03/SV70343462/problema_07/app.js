let precio;
let cantidad;
let tipo;
let descuento;
let preciototal;


precio = prompt('Ingresar precio del helado');
cantidad = prompt('Ingresar cantidad de helado');
tipo = prompt('Ingresar tipo de membresia');

impcompra = precio * cantidad

switch (tipo) {
    case "A":
        descuento = impcompra * 0.10;
        break;
    case "B":
        descuento = impcompra * 0.15;
    case "C":
        descuento = impcompra * 0.20;
    default:
        document.querySelector('.contenedor').innerHTML = "Error al ingresar membresia desconocida!!!"
        break;
}

preciototal = impcompra - descuento;

document.querySelector('.precio').innerHTML = `Precio del helado: s/.${precio}`;
document.querySelector('.cantidad').innerHTML = `Cantidad de helado: ${cantidad}`;
document.querySelector('.importecompra').innerHTML = `Importe de compra: s/.${impcompra}`;
document.querySelector('.tipo').innerHTML = `Tipo de membresia: ${tipo}`;
document.querySelector('.descuento').innerHTML = `Descuento: s/.${descuento}`;
document.querySelector('.preciototal').innerHTML = `Precio total: s/.${preciototal}`;


