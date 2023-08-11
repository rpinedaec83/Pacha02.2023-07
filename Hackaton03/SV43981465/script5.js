// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para 
// vender al por mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará
// un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de 
// treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
// El precio de cada zapato es de $80.

function calcularPrecioTotal(numZapatos){
    const precioZapato = 80;
    let descuento = 0;

    if(numZapatos > 30){
        descuento = 0.4;
    }else if(numZapatos > 20){
        descuento = 0.2;
        }else if(numZapatos > 10){
        descuento = 0.1;
    }
    const precioTotalSinDescuento = numZapatos * precioZapato;
    const precioTotalConDescuento = precioTotalSinDescuento*(1-descuento);

    return precioTotalConDescuento;
}

let cantidadZapatosComprados = parseInt(prompt("Ingrese cantidad de zapatos a comprar:"));
const precioFinal = calcularPrecioTotal(cantidadZapatosComprados);
alert("El precio final con descuento es: "+precioFinal.toFixed(2));

