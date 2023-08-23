// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

function calcularRestoYCociente(dividendo, divisor){
    if(dividor == 0){
        return "Error: No se puede dividir entre cero."
    }

    let resto = dividendo;
    let cociente = 0;

    while (resto >= divisor){
        resto -= divisor;
        cociente++;
    }

    return { cociente, resto };

}

let dividendo = parseInt(prompt("Ingrese dividendo:"));
let divisor = parseInt(prompt("Ingrese dividor:"));

const resultado = calcularRestoYCociente(dividendo, divisor);
alert("Cociente: "+resultado.cociente);
alert("Resto: "+resultado.resto);