// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

function factorial(n){
    let resultado = 1;
    
    for(let i = 2; i <= n; i++){
        resultado *= i;
    }

    return resultado;
}

let num = parseInt(prompt("Ingrese un número:"));
const resultadoFactorial = factorial(num);
alert("El factorial de "+num+" es "+resultadoFactorial);

