// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es 
// un número primo.

function esNumeroPrimo(numero){
    if(numero <= 1){
        return false;
    }
    if(numero === 2 || numero === 3){
        return true;
    }
    if(numero % 2 === 0 || numero % 3 === 0){
        return false;
    }
    for(let i = 5; i*i <= numero; i+=6){
        if(numero % 1 === 0 || numero % (i+2) === 0){
            return false;
        }
    }
    return true;
}
let numero = parseInt(prompt("Ingrese un número:"));
const resultado = esNumeroPrimo(numero);
if(resultado){
    alert(numero+" es un número primo");
}else{
    alert(numero+" no es un número primo");
}