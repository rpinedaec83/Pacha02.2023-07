// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

function esVocal(letra){
    const lm = letra.toLowerCase();

    if(lm === 'a' || lm === 'e' || lm === 'i' || lm === 'o' || lm === 'u'){
        return true;
    }else{
        return false;
    }
}

let letra = prompt("Ingrese una letra:");
let resultado = esVocal(letra);
if(resultado){
    alert(letra+" es una vocal");
}else{
    alert(letra+" es no es una vocal");
}
