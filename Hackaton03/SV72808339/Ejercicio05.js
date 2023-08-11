//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción
//de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número 
//de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son 
//más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

const cantidad = 28;
let descuento = 0, ahorro = 0, total = 0;


if (cantidad < 10) {
    descuento = 0;
  } else if (cantidad < 20) {
    descuento = 0.1;
  } else if (cantidad < 30) {
    descuento = 0.2;
  } else if (cantidad >= 30) {
    descuento = 0.4;
  }

ahorro = descuento * (cantidad * 80)
total = (cantidad * 80) - ahorro

console.log("Precio bruto:   ",'$'+cantidad*80);
console.log("Descuento:      ",descuento*100+"%");
console.log("Precio Final:   ",'$'+total);
console.log("Ahorrado:       ",'-$'+ahorro)