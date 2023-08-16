// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.

function esParOImpar(numero){
    if(numero % 2 == 0){
        return "Es un número par";
    }else {
        return "Es un número impar";
    }
}

let numero = parseInt(prompt("Ingrese un número:"));
const resultado = esParOImpar(numero);
alert(resultado);