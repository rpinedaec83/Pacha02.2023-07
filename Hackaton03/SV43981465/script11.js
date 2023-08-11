// 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

function encontrarMayor(n1, n2, n3){
    let mayor = n1;
    if(n2 > mayor){
        mayor = n2;
    }
    if(n3 > mayor){
        mayor = n3;
    }
    return mayor;
}

let n1 = parseInt(prompt("Ingrese primer número:"));
let n2 = parseInt(prompt("Ingrese segundo número:"));
let n3 = parseInt(prompt("Ingrese tercer número:"));
const resultado = encontrarMayor(n1, n2, n3);
alert("El número mayor es "+resultado);
