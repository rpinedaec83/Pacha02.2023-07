
let num = prompt('Ingresar un número: ');

const esPrimo = (n)=> {

    let cont = 0;

    for (let i = 0; i < n; ++i) {
        cont += (n % 2 === 0) ? 1 : 0;
    }

    return (cont <= 2) ? 'SI' : 'NO';
}

let result = esPrimo(num) + ' es primo.';

alert(result);