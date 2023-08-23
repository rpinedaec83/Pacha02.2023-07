// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

function encontrarMayor2(n1, n2){
    if(n1 > n2){
        return n1;
    }else {
        return n2;
    }
}

let n1 = parseInt(prompt("Ingrese primer número:"));
let n2 = parseInt(prompt("Ingrese segundo número:"));
const resultado = encontrarMayor2(n1, n2);
alert("El mayor de los números "+n1+" y "+n2+" es "+resultado);