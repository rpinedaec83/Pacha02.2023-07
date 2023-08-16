// 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y 
// la ganancia para el vendedor.

let cantidad= parseInt(prompt("Ingresar la cantidad de CDs a comprar:"))
let total = 0
let porce = 0.0825
let ganancia = 0

if (cantidad > 0 ) {
 if(cantidad >= 1 && cantidad <= 9) {
    total = cantidad * 10
   } else if(cantidad >= 10 && cantidad <= 99){
    total = cantidad * 8
   }
   else if(cantidad >= 100 && cantidad <= 499){
    total = cantidad * 7
   }
   else{
    total = cantidad * 6
   } 
   ganancia = total * porce

   document.write("Total a Pagar Cliente: "+ total)
   document.write("<br>")
   document.write("Ganancia del Vendedor: "+ ganancia.toFixed(2))
}
else{
    document.write("Ingresar numero positivo")
}
