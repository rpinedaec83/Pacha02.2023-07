/* 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución 
de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de 
    una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript 
que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor. */

const cant = 580;
let prec = 10;

switch (true) {
    case cant<10:
        break;
    case cant<100: prec = 8;
        break;
    case cant<500: prec = 7;
        break;
    case cant>=500: prec = 6;
        break;

    default: console.log("La compra debe de ser cómo mínimo 1 CD")
        break;
}

console.log(`Precio total:    $${cant*prec}`)
console.log(`Precio por CD:   $${prec}`)