//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

let datos = (nombre, apellido, edad) => {
    data = `Hola mi nombres es ${nombre} ${apellido} y mi edad es ${edad} `;
    return console.log(data);
}

let nombre = 'Sebastián';
let apellido = 'Yabiku';
let edad = 33;

datos(nombre, apellido, edad);

//Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// let sumOfCubes = (n1, n2, n3) => {
//     suma = (n1 ** 3) + (n2 ** 3) + (n3 ** 3);
//     return suma;
// }

// let n1 = prompt('Ingresar valor para n1');
// let n2 = prompt('Ingresar valor para n2');
// let n3 = prompt('Ingresar valor para n3');

// console.log(sumOfCubes(n1, n2, n3));

//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

let tipo = (dato) => {
    return typeof (dato);
}

console.log(tipo(4));
console.log(tipo(10));
console.log(tipo("Hello JavaScript"));
console.log(tipo("Aprendiendo Js"));
console.log(tipo(true));
console.log(tipo(false));
console.log(tipo(["Leche", "Pan", "Queso"]));
console.log(tipo(["Azul, Verde, Rojo"]));

//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

// let suma = (...n) => n.reduce((numero, acu) => numero + acu, 0);

// n1 = parseInt(prompt('Ingresar números'));
// n2 = parseInt(prompt('Ingresar números'));
// n3 = parseInt(prompt('Ingresar números'));
// console.log(suma(n1, n2, n3));



//Crear una función que reciba un array de valores y filtre los valores que no son string

let filtroCadena = (lista) => lista.filter(n => typeof n == 'string');

const listado = ['Hello', 10, false, 'Alexander', 4.4, 'Mouse', 43, true];
const cadenaFiltro = filtroCadena(listado);

console.log(cadenaFiltro);


//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

let minMax = (n) => { min = Math.min(...n); max = Math.max(...n); return [min, max] };

const n = [1, 2, 3, 4, 5];
const maxMin = minMax(n);
console.log(maxMin);

// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

let numeroTelefono = (n) => { final = n.join(''); return `(${final.slice(0, 3)}) ${final.slice(3, 6)}-${final.slice(6)}` };

const formatPhoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numTelefono = numeroTelefono(formatPhoneNumber);

console.log(numTelefono);
