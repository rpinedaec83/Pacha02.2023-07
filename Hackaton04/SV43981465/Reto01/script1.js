// - Crea una función que retorne la suma de dos números.

/*function suma(a,b){
    let suma = a + b;
    return suma;
}*/

const suma=(a,b)=>a+b;

let n1 = parseInt(prompt("Ingresa primer número:"));
let n2 = parseInt(prompt("Ingresa segundo número:"));

if(!isNaN(n1) && !isNaN(n2)){
    const resultado = suma(n1,n2);
    alert("La suma de "+n1+" + "+n2+" es "+resultado);
}else {
    alert("Ingrese números válidos");
}

