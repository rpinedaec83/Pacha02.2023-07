const leerEntero = (txt) => {
    let integer = prompt(txt);
    integer = parseInt(integer);

    return integer;
}

let hora = leerEntero('Ingresar hora: ');
let min = leerEntero('Ingresar minutos: ');
let seg = leerEntero('Ingresar segundos: ');

let segTotal = ((hora * 3600) + (min * 60) + seg) + 1;

hora = segTotal / 3600;
segTotal %= 3600;

min = segTotal / 60;
segTotal %= 60;

seg = segTotal;

alert('Hora +1 seg: ' + hora + ':' + min + ':' + seg);