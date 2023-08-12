let numero = parseInt(prompt('Ingresar un número'));

if (numero % 2 == 0) {
    document.querySelector('.numero').innerHTML = `${numero} es par`;
}
else {
    document.querySelector('.numero').innerHTML = `${numero} es impar`;
}