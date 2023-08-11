let n1;
let n2;
let n3;
let promedio;

n1 = parseInt(prompt('Ingresar nota 1: '));
n2 = parseInt(prompt('Ingresar nota 2: '));
n3 = parseInt(prompt('Ingresar nota 3: '));

promedio = parseFloat((n1 + n2 + n3) / 3);

if (promedio <= 10.4) {
    document.querySelector('.contenedor').innerHTML = `El promedio es ${promedio}. EL ALUMNO ESTA DESAPROBADO!!!`;
}
else {
    document.querySelector('.contenedor').innerHTML = `El promedio es ${promedio}. EL ALUMNO ESTA APROBADO!!!`;
}