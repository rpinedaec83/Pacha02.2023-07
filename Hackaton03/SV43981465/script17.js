// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

function calcularHoraDespuesSegundo(hora){
    //const horaActual = new Date(`2023-08-05T${hora}:00`);
    //const horaDespuesUnSegundo = new Date(horaActual.getTime() + 1000);
    const fechaActual = new Date(); // Obtiene la fecha y hora actual
    const fechaConHora = new Date(`${fechaActual.toISOString().slice(0, 10)}T${hora}`);
    const horaDespuesUnSegundo = new Date(fechaConHora.getTime() + 1000);

    const horaFormateada = horaDespuesUnSegundo.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});
    return horaFormateada;
}
let h = prompt("Ingrese Hora:");
let m = prompt("Ingrese Minuto:");
let s = prompt("Ingrese Segundo:");

let hf = h+":"+m+":"+s;
//const hf = '11:15:15';
const horaDespuesUnSegundo = calcularHoraDespuesSegundo(hf);
alert("La hora dentro de un segundo despues de "+hf+" será "+horaDespuesUnSegundo);