// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

function ordenarNumeros(n1, n2, n3){
    const numerosOrdenados = [n1, n2, n3].sort((a, b) => a - b);
    return numerosOrdenados;
}

const n1 = parseInt(prompt("Ingrese el primer número:"));
const n2 = parseInt(prompt("Ingrese el segundo número:"));
const n3 = parseInt(prompt("Ingrese tercer número:"));

const numerosOrdenados = ordenarNumeros(n1, n2, n3);

alert("Los números ordenas de menos a mayor son: "+numerosOrdenados.join(", "));