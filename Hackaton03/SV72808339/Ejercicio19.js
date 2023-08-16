/* 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados 
de la siguiente forma con su número identificador y salario diario correspondiente:

    1 - Cajero (56$/día).

    2 - Servidor (64$/día).

    3 - Preparador de mezclas (80$/día).

    4 - Mantenimiento (48$/día).

El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen 
al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó */

let trabajador = 3, tipo = "", dias = 5, paga = 0, sueldo = 0;

switch (trabajador) {
    case 1:
        paga = 56;
        tipo = "Cajero";
        break;
    case 2:
        paga = 64;
        tipo = "Servidor";
        break;
    case 3:
        paga = 80;
        tipo = "Preparador de mezclas";
        break;
    case 4:
        paga = 48
        tipo = "Mantenimiento";
        break;
    default: console.log("Escoja el número id del trabajador 1-4")
        break;
}
if (dias<=6){
    sueldo = dias * paga;
} else{
    console.log("Máximo 6 días.")
}
console.log(`Se le debe pagar un total de $${sueldo} al ${tipo}`)