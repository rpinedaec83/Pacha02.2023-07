// 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
let nFactorial = parseInt(prompt("Ingrese un número:"));
const resultadoFactorial = factorial(nFactorial);
alert("El factorial de "+nFactorial+" es "+resultadoFactorial);