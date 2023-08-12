let letra = prompt('Ingresar una letra: ');

const esVocal = (le) => {

    let vocales = ['a', 'e', 'i', 'o', 'u'];

    return (vocales.includes(le.toLowerCase()) ? 'SI' : 'NO');
}

let result = esVocal(letra) + ' es vocal.';

alert(result);