// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

function sumaNumerosImpares(n){
    const cantidadImpares = Math.floor((n+1)/2);
    const sumaImpares = cantidadImpares*cantidadImpares;
    return sumaImpares;
}

let n = parseInt(prompt("Ingrese un número:"));
const resultadoSumaImpares = sumaNumerosImpares(n);
alert("La suma de los números impares menores o iguales a "+n+" es "+resultadoSumaImpares);