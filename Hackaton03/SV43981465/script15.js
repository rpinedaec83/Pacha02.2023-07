// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

function centimetroApulgada(cm){
    const pulgadasPorCentimetro = 0.393701;
    return cm * pulgadasPorCentimetro;
}

function librasAKilogramos(li){
    const kilogramosPorLibra = 0.453592;
    return li * kilogramosPorLibra;
}

let cm = parseInt(prompt("Ingrese la cantidad de centimetros:"));
let li = parseInt(prompt("Ingrese la cantidad de libras:"));

const pu = centimetroApulgada(cm);
const kg = librasAKilogramos(li);

alert(cm+" centimetros son "+pu.toFixed(2)+" pulgadas.");
alert(li+" libras son "+kg.toFixed(2)+" kilogramos.");
