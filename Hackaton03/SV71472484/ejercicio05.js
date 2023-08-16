// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
// esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
// si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
// El precio de cada zapato es de $80.
let respuesta = prompt("Ingrese el numero de zapatos que desea comprar:")
let numero = parseInt(respuesta)
let precio = 80
let descuento = 0
let totales = 0
let porcentaje = ""
let total = numero * precio

if(numero > 30){
    descuento = total * 0.4
    porcentaje = "40%"
}else if(numero > 20){
    descuento = total * 0.2
    porcentaje = "20%"
}else if(numero > 10){
    descuento = total * 0.1
    porcentaje = "10%"
}
else{
    descuento = 0
    porcentaje = "-"
}

totales = total - descuento

document.write("Precio Unitario: $"+precio+"<br>")
document.write("Cantidad:         "+numero+"<br>")
document.write("Subtotal:        $"+total+"<br>")
document.write("Descuento(%):     "+porcentaje+"<br>")
document.write("Descuento($):    $"+descuento+"<br>")
document.write("<b>Total:        $"+totales+"</b><br>")