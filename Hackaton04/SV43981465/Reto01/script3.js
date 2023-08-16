// - Crea una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function cubo_numero(num){
    let cubo = num*num*num;
    return cubo;
}
const arrNumero=[];
for(let i=0;i<=2;i++){
    arrNumero[i] = parseInt(prompt("Ingrese número"));
}
let suma = 0;
for(let j=0;j<=2;j++){
    let numero = parseFloat(arrNumero[j]);
    suma += cubo_numero(numero);
}
alert("La suma de los cubos de los números ingresados es: "+suma);