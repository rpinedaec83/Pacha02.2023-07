const leerEntero = (txt) => {
    let integer = prompt(txt);
    integer = parseInt(integer);

    return integer;
}

let num1 = leerEntero('Ingresar 1er número: ');
let num2 = leerEntero('Ingresar 2do número: ');

const encontrarMayor = (...args) => {
    return Math.max(...args);
}

let mayor = encontrarMayor(num1, num2);

alert('El número mayor es: ' + mayor);