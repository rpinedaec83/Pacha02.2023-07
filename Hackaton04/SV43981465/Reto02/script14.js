// Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function sumOfSquare(n){
    let sum = 0;
    for(i=1;i<=n;i++){
        sum += Math.pow(i, 2);
    }
    return sum;
}

let numero = parseFloat(prompt("Ingrese un número:"));
const resultado = sumOfSquare(numero);
alert(resultado);
