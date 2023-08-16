// Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales 
// en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function(vocalNueva){
    return this.replace(/[aeiouAEIOU]/g, vocalNueva);
};

const cadenaOriginal = "apples and bananas";
const resultado = cadenaOriginal.vreplace("U");
alert(resultado);

