//Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

const numero = prompt("Ingresar un número");

if (numero < 0) {
    document.querySelector('.resultado').innerHTML = `${numero} es negativo.`
}
else if (numero > 0) {
    document.querySelector('.resultado').innerHTML = `${numero} es positivo.`
}
else {
    document.querySelector('.resultado').innerHTML = `${numero} es cero.`
}

