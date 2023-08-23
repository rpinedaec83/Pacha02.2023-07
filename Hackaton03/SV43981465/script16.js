// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

function obtenerDiaSemana(n){
    let diaSemana;

    switch(n){
        case 1:
            diaSemana = 'Lunes';
            break;
        case 2:
            diaSemana = 'Martes';
            break;
        case 3:
            diaSemana = 'Miercoles';
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sabado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Valor inválido";
    }
    return diaSemana;
}

let n = parseInt(prompt("Ingrese número:"));
const resultado = obtenerDiaSemana(n);
alert("El número "+n+" corresponde al día de la semana "+resultado);