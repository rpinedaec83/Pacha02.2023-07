// Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

function obtenerTipo(valor){
    return typeof valor;
}

alert(`El número 2 devuelve ${obtenerTipo(2)}`);
alert(`La cadena de texto 'Hola, mundo' devuelve ${obtenerTipo('Hola, mundo')}`);
alert(`El booleano 'true' devuelve ${obtenerTipo(true)}`);
alert(`El array '[]' devuelve ${obtenerTipo([])}`);
alert(`El objeto '{}' devuelve ${obtenerTipo({})}`);
alert(`El null devuelve ${obtenerTipo(null)}`);
alert(`El undefined devuelve ${obtenerTipo(undefined)}`);
alert(`La función anónima devuelve ${obtenerTipo(function() {})}`);
