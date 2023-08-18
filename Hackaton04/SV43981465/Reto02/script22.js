// Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

function capLast(cadena){
    const palabras = cadena.split(" ");
    const palabrasCapitalizadas = palabras.map(palabra => {
        const ultimaLetra = palabra.slice(-1).toUpperCase();
        const parteInicial = palabra.slice(0,-1);
        return parteInicial + ultimaLetra;
    })
    return palabrasCapitalizadas.join(" ");
}

const cadenaOriginal = "hello world";
const resultado = capLast(cadenaOriginal);
alert(resultado);

