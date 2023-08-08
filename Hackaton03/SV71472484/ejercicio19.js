// 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y 
// salario diario correspondiente:
// Cajero (56$/día).
// Servidor (64$/día).
// Preparador de mezclas (80$/día).
// Mantenimiento (48$/día).
// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y 
// la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

let empleado = prompt("Ingresar Identificador del Empleado: \n 01: Cajero \n 02: Servidor \n 03: Preparador de mezclas \n 04: Mantenimiento")
let dia = parseInt(prompt("Ingrese los dias trabajados maximo 6 dias"))
let pago = 0

if (dia <= 6){
switch (empleado) {
    case "01":
            pago = dia * 56
            document.write("Total a pagar al Cajero: $"+pago)    
        break;
    case "02":
            pago = dia * 64
            document.write("Total a pagar al Servidor: $"+pago)    
        break;
    case "03":
            pago = dia * 80
            document.write("Total a pagar al Preparador de mezclas: $"+pago)    
        break;
    case "04":
            pago = dia * 80
            document.write("Total a pagar al de Mantenimiento: $"+pago)    
        break;

    default:
        document.write("Ingresar Identificador correcto")
        break;
}
}
else {
    document.write("Ingresar maximo 6 dias")
}
