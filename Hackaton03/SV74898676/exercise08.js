const leerEntero = (txt) => {
    let integer = prompt(txt);
    integer = parseInt(integer);

    return integer;
}

let nota1 = leerEntero('Ingresar 1ra nota: ');
let nota2 = leerEntero('Ingresar 2da nota: ');
let nota3 = leerEntero('Ingresar 3ra nota: ');

const calcularPromedioNotas = (...arg) => {
    return (arg.reduce((acc, val) => acc + val,  0) / arg.length);
}

let promedioNotas = calcularPromedioNotas(nota1, nota2, nota3);

alert('El promedio de notas es: ' + promedioNotas);