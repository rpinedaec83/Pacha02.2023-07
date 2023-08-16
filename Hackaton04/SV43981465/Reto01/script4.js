// - Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
// triArea(3, 2) ➞ 3

function area_triangulo(b,h){
    let area = 0;
    area = (b*h)/2;
    return area;
}

let base = parseFloat(prompt("Ingrese la base del triangulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triangulo:"));

const resultado = area_triangulo(base,altura);

alert("El area del triangulo es: "+resultado);