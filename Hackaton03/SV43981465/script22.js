// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

function sumaDeLosPrimerosNNumeros(n){
    return (n * (n + 1)) / 2;
}

let n = parseInt(prompt("Ingrese un número:"));
const resultadoSuma = sumaDeLosPrimerosNNumeros(n);
alert("La suma de los "+n+" números es: "+resultadoSuma);