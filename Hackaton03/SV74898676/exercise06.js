const PAGO_HORA = 20;

let horasTrab = prompt('Ingresar cantidad horas trabajadas: ');

const obtenerSueldoSemanal = (hTrab) => {

    let pagoBase = hTrab * PAGO_HORA;

    if (hTrab <= 40) return pagoBase;

    let pagoExtra = (hTrab - 40) * (PAGO_HORA + 5);

    return pagoBase + pagoExtra;
}

let sueldoTotal = obtenerSueldoSemanal(horasTrab);

alert('El pago del trabajador es de: $' + sueldoTotal);

