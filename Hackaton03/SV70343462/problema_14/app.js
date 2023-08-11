let num, divisor, contador;
let esPrimo = true;

num = parseInt(prompt("Ingrese un número entero positivo del 1 al 10:"));

if (num <= 1 || num > 10) {
    alert("El número ingresado debe estar entre 1 y 10.");
    esPrimo = false;
}

if (esPrimo == true) {
    divisor = 2;
    while (divisor < num && esPrimo == true) {
        if (num % divisor == 0) {
            esPrimo = false;
        }
        divisor = divisor + 1;
    }
}

if (esPrimo == true) {
    alert('El número ingresado es primo.');
}
else {
    alert('El número ingresado No es primo.');
}
