// 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

function calcularPrecioYGanancia(cantidadCDs) {
    let precioUnitario;
    let gananciaVendedor;
  
    if (cantidadCDs >= 1 && cantidadCDs <= 9) {
      precioUnitario = 10;
    } else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
      precioUnitario = 8;
    } else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
      precioUnitario = 7;
    } else if (cantidadCDs >= 500) {
      precioUnitario = 6;
    } else {
      return 'Cantidad inválida';
    }
  
    const precioTotalCliente = cantidadCDs * precioUnitario;
    gananciaVendedor = precioTotalCliente * 0.0825;
  
    return { precioTotalCliente, gananciaVendedor };
  }
  
  let cantidadCDsVender = parseInt(prompt("Ingrese la cantidad de CDs a adquirir:"));
  const resultado = calcularPrecioYGanancia(cantidadCDsVender);
  alert(`Precio total para el cliente: $${resultado.precioTotalCliente}`);
  alert(`Ganancia para el vendedor: $${resultado.gananciaVendedor.toFixed(2)}`);