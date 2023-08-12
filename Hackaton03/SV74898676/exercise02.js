let num1 = prompt('Ingresar un  numero: ');

num1 = parseInt(num1);

const esNegativo = (num) => {
    return (num < 0) ? 'SI' : 'NO';
}

let result = esNegativo(num1) + ' es negativo.';

alert(result);