let numero = prompt('Ingresar número:');

if (numero % numero == 0 && numero / numero == 1 && numero > 1) {
    document.querySelector('.numero').innerHTML = `${numero} es un número primo`;
}
else {
    document.querySelector('.numero').innerHTML = `${numero} no es un número primo`;
}
  