//1-Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

// const numero = prompt("Ingresar un número");

// if (numero > 99 && numero < 1000) {
//     document.querySelector('.resultado').innerHTML = `${numero} tiene 3 dígitos.`    
// }
// else {
//     document.querySelector('.resultado').innerHTML = `${numero} no tiene 3 dígitos.`
// }


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

