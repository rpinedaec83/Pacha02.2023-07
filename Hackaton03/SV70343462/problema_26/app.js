let dividendo;
let divisor;
let cociente;
let resto;

dividendo = parseInt(prompt("Ingrese el dividendo"));
divisor = parseInt(prompt("Ingrese el divisor"));

if (divisor == 0) {
    document.querySelector('.cociente').innerHTML = `Error: no se puede dividir por cero.`;
}
else {
    cociente = 0;

    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        cociente = cociente + 1;
    }

    resto = dividendo;

    document.querySelector('.cociente').innerHTML = `El cociente es: ${cociente}`;
    document.querySelector('.resto').innerHTML = `El resto es: ${resto}`;
}