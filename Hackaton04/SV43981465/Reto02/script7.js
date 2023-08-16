// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena 
// en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function formatPhoneNumber(matriz){
    if(matriz.length != 10){
        return "La matriz debe de contener exactamente 10 dígitos";
    }

    const areaCode = matriz.slice(0,3).join('');
    const firstpart = matriz.slice(3,6).join('');
    const secondpart = matriz.slice(6).join('');

    return `(${areaCode}) ${firstpart}-${secondpart}`;
}

const numeros = [1,2,3,4,5,6,7,8,9,0];
const numeroTelefono = formatPhoneNumber(numeros);
alert(numeroTelefono);
