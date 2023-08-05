const PRECIO_ZAPATO = 80;

let zapNum = prompt('Cantidad de zapatos comprados: ');

const precioVentaTotal = (zapatos) => {

    let descuento = undefined;
    let precioBase = zapatos * PRECIO_ZAPATO;

    if (zapatos > 10) {
        descuento = (precioBase * 10) / 100;
    }
    else if (zapatos > 20 && zapatos <= 30) {
        descuento = (precioBase * 20) / 100;
    }
    else if (zapatos > 30) {
        descuento = (precioBase * 40) / 100;
    }
    else {
        descuento = 0;
    }

    return precioBase - descuento;
}

let precioTotal = precioVentaTotal(zapNum);

alert('El precio total de compra es: ' + precioTotal);