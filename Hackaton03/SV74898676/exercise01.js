let num1 = prompt('Ingresar un numero: ');

num1 = parseInt(num1);
const tieneTresDigit = (num) => {
    return (num >= 100 && num <= 999) ? 'SI' : 'NO';
}

let result = tieneTresDigit(num1) + ' tiene 3 dígitos';

alert(result);