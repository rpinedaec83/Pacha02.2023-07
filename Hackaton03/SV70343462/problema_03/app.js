
//Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

const numero = prompt("Ingresar un número")

if (numero % 10 == 4) {// si el 'numero' dividido entre 10 tiene como residuo 4
    document.querySelector('.resultado').innerHTML = `${numero} termina en 4.`
}
else {
    document.querySelector('.resultado').innerHTML = `${numero} no termina en 4.`
}


