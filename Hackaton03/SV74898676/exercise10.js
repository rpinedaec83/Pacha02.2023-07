let num = prompt('Ingresar un numero: ');

const esPar = (n) => {
    return (n % 2 === 0) ? 'SI' : 'NO';
}

let result = esPar(num) + ' es número par.';

alert(result);