// - Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el 
// número a potenciar.

function operacion_potencia(num,exp){
    let potencia = 1;
    for(let i = 1; i <= exp; i++){
        potencia *= num;
    }
    return potencia;
}

let numero = parseFloat(prompt("Ingrese un número a operar:"));
let exponente = parseFloat(prompt("Ingrese el valor del exponente:"));

if(!isNaN(numero) && !isNaN(exponente)){
    let resultado = operacion_potencia(numero,exponente);
    alert("La potencia de "+numero+" elevado al número "+exponente+" da como resultado: "+resultado);
}else{
    alert("Ingrese números válidos");
}