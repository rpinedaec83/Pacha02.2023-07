let tipo = prompt('Ingresar tipo de empleado');
let dia = prompt('Ingresar días trabajados');


if (dia <= 6) {
    switch (tipo) {
        case "Cajero":
            salario = 56 * dia;
            break;
        case "Servidor":
            salario = 64 * dia;
        case "Preparador":
            salario = 80 * dia;
        case "Mantenimiento":
            salario = 48 * dia;
        default:
            document.querySelector('.contenedor').innerHTML = `ERROR AL INGRESAR EL TIPO DE EMPLEADO!!!`;
            break;
    }
}
else {
    document.querySelector('.contenedor').innerHTML = `ERROR AL INGRESAR LOS DÍAS TRABAJADOS MÁXIMOS SON 6!!!`;
}

document.querySelector('.salario').innerHTML = `El salario a pagar es: s/.${salario}`;