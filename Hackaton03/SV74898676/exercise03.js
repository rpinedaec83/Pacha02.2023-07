let num1 = prompt('Ingresar un numero: ');

num1 = parseInt(num1);

const terminaEnCuatro = (num) => {
    return (num % 10 == 4) ? 'SI' : 'NO';
}

let result = terminaEnCuatro(num1) + ' termina en 4.';

alert(result);