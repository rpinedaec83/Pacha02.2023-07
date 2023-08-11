let horaTrabajo;
let horaextra;
let sueldo;

horaextra = 0;

horaTrabajo = prompt("Ingresar horas trabajadas");


if (horaTrabajo <= 40) {
    sueldo = 20 * horaTrabajo;
}
else {
    horaextra = horaTrabajo - 40;
    horaTrabajo = 40;
    sueldo = 20 * horaTrabajo + horaextra * 25;
}

document.querySelector('.horatrabajo').innerHTML = `Horas trabajadas: ${horaTrabajo}`;
document.querySelector('.horaextra').innerHTML = `Horas extras: ${horaextra}`;
document.querySelector('.sueldo').innerHTML = `Sueldo a pagar: s/.${sueldo}`;