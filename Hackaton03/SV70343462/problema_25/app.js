let n = parseInt(prompt("Ingrese un número entero positivo"));

let factorial = 1;

if (n < 0) {
    document.querySelector('.factorial').innerHTML = `El número ingresado debe ser un entero positivo o cero.`;

}
else {
    for (let i = 1; i < n; i++){
        factorial = factorial * i;
    }

    document.querySelector('.factorial').innerHTML = `El factorial de ${n} es: ${factorial}`;
}

