// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function sumar(...numeros){
    return numeros.reduce((acc, num) => acc + num, 0);
}

alert(`La suma de los números 1,2,3,4,5,6,7,8 y 9 es: ${sumar(1,2,3,4,5,6,7,8,9)}`);
alert(`La suma de los número 34,5,32,65,3,4,875,12,75,9,27 y 29 es: ${sumar(34,5,32,65,3,4,875,12,75,9,27,29)}`);