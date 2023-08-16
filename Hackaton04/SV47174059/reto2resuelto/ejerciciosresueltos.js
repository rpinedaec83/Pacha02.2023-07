//Ejercicio1.-Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
// Definir la función usando función de flecha
const crearSaludo = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
  };
  
  // Llamar a la función y mostrar el resultado
  const resultado = crearSaludo("Sebastián", "Yabiku", 33);
  console.log(resultado);


//Ejercicio 2.- Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// Definir la función
function sumOfCubes(...numeros) {
    return numeros.reduce((suma, num) => suma + Math.pow(num, 3), 0);
  }
  
  // Llamar a la función y mostrar el resultado
  const resultado1 = sumOfCubes(1, 5, 9);
  console.log(resultado); // Resultado: 855



//Ejercicio3 .- Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
function obtenerTipo(valor) {
    return typeof valor;
  }

const valor1 = 5;
const valor2 = "Hola";
const valor3 = true;
const valor4 = [];
const valor5 = {};

console.log(`El tipo de ${valor1} es ${obtenerTipo(valor1)}`);
console.log(`El tipo de ${valor2} es ${obtenerTipo(valor2)}`);
console.log(`El tipo de ${valor3} es ${obtenerTipo(valor3)}`);
console.log(`El tipo de ${valor4} es ${obtenerTipo(valor4)}`);
console.log(`El tipo de ${valor5} es ${obtenerTipo(valor5)}`);



//Ejercicio4  .- Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)


function sumar(...numeros) {
    return numeros.reduce((suma, num) => suma + num, 0);
  }

  console.log(sumar(1, 2, 3));            // Resultado: 6
  console.log(sumar(5, 10, 15, 20));      // Resultado: 50
  console.log(sumar(2, -2, 4, -4, 6));    // Resultado: 6


//Ejercicio5   .-Crear una función que reciba un array de valores y filtre los valores que no son string

function filtrarStrings(arr) {
    return arr.filter(valor => typeof valor === "string");
  }

  const valores = [1, "Hola", true, "Mundo", 42, "JavaScript"];

  const stringsFiltrados = filtrarStrings(valores);
  console.log(stringsFiltrados);



//Ejercicio6  .-Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
  }

  const numeros = [3, 9, 1, 8, 5];

  const resultado2 = minMax(numeros);
  console.log(resultado); // Resultado: [1, 9]



//Ejercicio 7.-  Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function formatPhoneNumber(arr) {
    const areaCode = arr.slice(0, 3).join('');
    const firstPart = arr.slice(3, 6).join('');
    const secondPart = arr.slice(6).join('');

    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }

  const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const numeroTelefono = formatPhoneNumber(numeros);
  console.log(numeroTelefono); // Resultado: "(123) 456-7890"



//Ejercicio 8   .-Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums(matriz) {
    return matriz.map(subMatriz => Math.max(...subMatriz));
  }

  const matrizDeMatrices = [
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
  ];

  const mayoresNumeros = findLargestNums(matrizDeMatrices);
  console.log(mayoresNumeros); // Resultado: [7, 90, 2]



//Ejercicio9   .-Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);

    return [primerIndice, ultimoIndice];
  }

  const palabra1 = "hello";
  const caracter1 = "l";
  console.log(charIndex(palabra1, caracter1)); // Resultado: [2, 3]

  const palabra2 = "circumlocution";
  const caracter2 = "c";
  console.log(charIndex(palabra2, caracter2)); // Resultado: [0, 8]



//Ejercicio 10    .- Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(objeto) {
    return Object.entries(objeto);
  }

  const objeto = { a: 1, b: 2 };
  const matriz = toArray(objeto);
  console.log(matriz); // Resultado: [["a", 1], ["b", 2]]


//Ejercicio 11  .- Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

//getBudgets([
// { name: "John", age: 21, budget: 23000 },
//  { name: "Steve",  age: 32, budget: 40000 },
//  { name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700

function getBudgets(personas) {
    return personas.reduce((suma, persona) => suma + persona.budget, 0);
  }

  const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
  ];

  const sumaPresupuestos = getBudgets(personas);
  console.log(sumaPresupuestos); // Resultado: 65700



//Ejercicio 12 .- Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
 // { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
  }

  const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ];

  const nombresEstudiantes = getStudentNames(estudiantes);
  console.log(nombresEstudiantes); // Resultado: ["Steve", "Mike", "John"]



// Ejercicio 13  .- Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(objeto) {
    return Object.entries(objeto);
  }

  const objeto1 = {
    likes: 2,
    dislikes: 3,
    followers: 10
  };

  const matriz1 = objectToArray(objeto);
  console.log(matriz); // Resultado: [["likes", 2], ["dislikes", 3], ["followers", 10]]


// Ejercicio 14 .- Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14

function squaresSum(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
      suma += i * i;
    }

    return suma;
  }

  const numero = 3;
  const resultado3 = squaresSum(numero);
  console.log(resultado); // Resultado: 14



//Ejercicio 15 .- Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(matriz) {
    const longitud = matriz.length;
    return matriz.map(valor => valor * longitud);
  }

  const matriz2 = [2, 3, 1, 0];
  const resultado4 = multiplyByLength(matriz);
  console.log(resultado); // Resultado: [8, 12, 4, 0]



// Ejercicio 16 .- Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(numero) {
    const resultado = [];

    for (let i = numero; i >= 0; i--) {
      resultado.push(i);
    }

    return resultado;
  }

  const numero3 = 5;
  const resultado5 = countdown(numero);
  console.log(resultado); // Resultado: [5, 4, 3, 2, 1, 0]


//Ejercicio 17 .- Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(matriz) {
    const minimo = Math.min(...matriz);
    const maximo = Math.max(...matriz);
    return maximo - minimo;
  }

  const matriz5 = [10, 4, 1, 4, -10, -50, 32, 21];
  const diferencia = diffMaxMin(matriz);
  console.log(diferencia); // Resultado: 82



//Ejercicio 18  .- Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(matriz) {
    return matriz.filter(valor => typeof valor === "number");
  }

  const matriz6 = [1, 2, 3, "x", "y", 10];
  const nuevaMatriz = filterList(matriz);
  console.log(nuevaMatriz); // Resultado: [1, 2, 3, 10]


// Ejercicio 19   .- Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function repeat(elemento, veces) {
    const resultado = [];

    for (let i = 0; i < veces; i++) {
      resultado.push(elemento);
    }

    return resultado;
  }

  const elemento = 13;
  const veces = 5;
  const resultado6 = repeat(elemento, veces);
  console.log(resultado); // Resultado: [13, 13, 13, 13, 13]


//Ejercicio 20 .- Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function(reemplazo) {
    return this.replace(/[aeiou]/g, reemplazo);
  };

  const original = "apples and bananas";
  const resultado7 = original.vreplace("u");
  console.log(resultado); // Resultado: "upplus und bununus"


//Ejercicio 21 .- Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function findNemo(cadena) {
    const palabras = cadena.split(" ");
    const posicion = palabras.indexOf("Nemo");

    if (posicion !== -1) {
      return `I found Nemo at ${posicion + 1}!`;
    } else {
      return "Nemo not found!";
    }
  }

  const cadena1 = "I am finding Nemo !";
  const resultado8 = findNemo(cadena);
  console.log(resultado); // Resultado: "I found Nemo at 4!"


// Ejercicio22  .- Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"


function capLast(cadena) {
    const palabras = cadena.split(" ");
    const palabrasCapitalizadas = palabras.map(palabra => {
      const ultimoCaracter = palabra.charAt(palabra.length - 1);
      const palabraCapitalizada = palabra.slice(0, -1) + ultimoCaracter.toUpperCase();
      return palabraCapitalizada;
    });
    return palabrasCapitalizadas.join(" ");
  }

  const cadena = "hello world";
  const resultado9 = capLast(cadena);
  console.log(resultado); // Resultado: "hellO worlD"
