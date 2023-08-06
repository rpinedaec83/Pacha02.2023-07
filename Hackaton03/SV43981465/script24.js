// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

function sumaNumerosParesHasta1000(){
    let sumaPares = 0;

    for(let i=2;i<=1000;i++){
        sumaPares += i;
    }

    return sumaPares;
}

const resultadoSumaPares = sumaNumerosParesHasta1000();
alert("La suma de todos los números pares hasta 1000 es: "+resultadoSumaPares);