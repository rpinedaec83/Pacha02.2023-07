//Ejercicio 1
const fnc2 =(nombre,ape,edad_per) => console.log("Hola mi nombre es "+ nombre+" "+ape+ " y mi edad es "+edad_per+" años");

fnc2("Luis","Poma Ordoñez",32 );

//Ejercicio 2
function sumcub(n1,n2,n3){
    let resultado;
    resultado = Math.pow(n1,3)+Math.pow(n2,3)+Math.pow(n3,3);
    return resultado;
}
console.log("Suma de cubos: "+ sumcub(1,5,9) );

//Ejercicio 3
function tipovalor(a){
    valor=typeof(a);
    return valor;
}
console.log(tipovalor("hola"));

//Ejercicio 4
function sumarNumeros(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  console.log(sumarNumeros(1,2,3,10,20));

//Ejercicio 5
function myFunction(array) {

  return array.filter(numero=>typeof numero==='boolean'|| typeof numero==='number');
}
let arrayOriginal = [1, 'hola', true, 'mundo', 42, 'cadena'];
let arrayFiltrado = myFunction(arrayOriginal);

console.log(arrayFiltrado);


//Ejercicio 6
function ordnum(a, b) {
  return a - b}
  let numeros = [15, 23, 12];

numeros.sort(function ordnum(a, b){return a - b}); 

let min = numeros.slice(0,1);//12
let maxi = numeros.slice(2,3)//23;
//let arrayf=min.concat(maxi);
let matres=min.concat(maxi);
console.log(matres);

//Ejercicio7
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let numcel = (arr1 = []) => {
   let resultado = '';
   arr1 = arr1.map(String);
   resultado += `(${arr1[0]+arr1[1]+arr1[2]}) `;
   resultado += `${arr1[3] + arr1[4] + arr1[5]}-`;
   resultado += arr1[6] + arr1[7] + arr1[8] + arr1[9];
   return resultado;
};
console.log(numcel(arr1));

//Ejercicio8
var arr = [1, 2, 3];
var max = Math.max(...arr);
console.log(max);

function minMaxNumbers(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [null, null];
  }
  
  let minNum = matrix[0][0];
  let maxNum = matrix[0][0];
  
  for (let row of matrix) {
    for (let num of row) {
      if (num < minNum) {
        minNum = num;
      }
      if (num > maxNum) {
        maxNum = num;
      }
    }
  }
  
  return [minNum, maxNum];
}

// Ejemplo de uso
let matrix = [
  [20, 3, 9],
  [8, 1, 7],
  [6, 2, -30]
];

let [minNum, maxNum] = minMaxNumbers(matrix);
console.log("Número mínimo:", minNum);
console.log("Número máximo:", maxNum);


//Ejercicio 9
function encontrarIndicesDeCaracter(palabra, caracter) {
  let primind = -1;
  let ultind = -1;

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === caracter) {
      if (primind === -1) {
        primind = i;
      }
      ultind = i;
    }
  }

  return {
    primind: primind,
    ultind: ultind
  };
}

let ejem = "circumlocution";
let caracterBuscar = "c";

let indices = encontrarIndicesDeCaracter(ejem, caracterBuscar);
console.log("Primer índice:", indices.primind);
console.log("Último índice:", indices.ultind);

function numeroAArray(numero) {
  return Array.from(String(numero), Number);
}

let arraypind = numeroAArray(indices.primind);
let arrayult = numeroAArray(indices.ultind);
let arregloDeDigitos = arraypind.concat(arrayult);
console.log(arregloDeDigitos);

//Ejercicio 10
function objmat(objeto) {
  
 
  return Object.entries(objeto);
  }
  
  let mat = { a: 1, b: 2, c: 3 };
  let matpar = objmat(mat);
  console.log(matpar);

  //Ejercicio 11
  function sumaPresupuestos(personas) {
    let suma = 0;
    
    for (let persona of personas) {
      if (persona.hasOwnProperty("presupuesto")) {
        suma += persona.presupuesto;
      }
    }
    
    return suma;
  }
  
  let personas = [
    { nombre: "Luis",age:21, presupuesto: 1000 },
    { nombre: "Jorge",age:19, presupuesto: 1500 },
    { nombre: "Marco",age:36, presupuesto: 800 }
  ];
  
  let totalPresupuestos = sumaPresupuestos(personas);
  console.log("Suma de presupuestos:", totalPresupuestos);
  
  //Ejercicio 12
  function obtenerNombresEstudiantes(estudiantes) {
    let nombres = [];
    
    for (let estudiante of estudiantes) {
      if (estudiante.hasOwnProperty("nombre")) {
        nombres.push(estudiante.nombre);
      }
    }
    
    return nombres;
  }
  
  let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 }
  ];
  
  let nombresEstudiantes = obtenerNombresEstudiantes(estudiantes);
  console.log("Nombres de estudiantes:", nombresEstudiantes);
  
//Ejercicio13
function objectToArray(objeto) {
  return Object.keys(objeto).map(clave => [clave, objeto[clave]]);
}

let miObjeto = { likes: 2, dislikes: 3, followers: 10 };
let matrizClavesValores = objectToArray(miObjeto);
console.log(matrizClavesValores);


//Ejercicio 14
function sumnumcuad(n) {
  let suma = 0;

  for (let i = 1; i <= n; i++) {
    suma += i * i;
  }

  return suma;
}

let n = 4;
let sumaCuadrados = sumnumcuad(n);
console.log("La suma de los números cuadrados hasta", n, "es:", sumaCuadrados);

//Ejercicio 15
function multporcant(matriz) {
  const cant = matriz.length;

  return matriz.map(valor => valor * cant);
}

let mimatriz = [2, 3, 5, 7, 5];
let resultado = multporcant(mimatriz);
console.log(resultado); 

//Ejercicio 16
function contardesden(numero) {
  let numeros = [];
  
  for (let i = numero; i >= 0; i--) {
    numeros.push(i);
  }
  
  return numeros;
}

let numinic = 5;
let numcont = contardesden(numinic);
console.log(numcont); 

//Ejercicio 17
function diferenciaMaxMin(matriz) {
  if (matriz.length === 0) {
    return 0; 
  }

  let maximo = matriz[0];
  let minimo = matriz[0];

  for (let numero of matriz) {
    if (numero > maximo) {
      maximo = numero;
    }
    if (numero < minimo) {
      minimo = numero;
    }
  }

  return maximo - minimo;
}

let matri = [5, 9, 3, 30, 6];
let diferencia = diferenciaMaxMin(matri);
console.log("La diferencia entre los números más grandes y más pequeños es:"+ diferencia);

//Ejercicio 18
function filtrarnum(matriz) {
  return matriz.filter(elemento => Number.isInteger(elemento));
}

let matrizoriginal = [1, true, "Hola", 3.5, "Mundo", 4];
let matrizenteros = filtrarnum(matrizoriginal);
console.log(matrizenteros); 

//Ejercicio 19
function repetirelem(elemento, veces) {
  let resultado = [];

  for (let i = 0; i < veces; i++) {
    resultado.push(elemento);
  }

  return resultado;
}

let res = repetirelem(13, 5);
console.log(res); 

//Ejercicio 20
String.prototype.vreplace = function (vocalnueva) {
  return this.replace(/[aeiouAEIOU]/g, vocalnueva);
};

let cad = "Hola mi nombre es Luis";
let vocalnueva = "a";

let nuevacad = cad.vreplace(vocalnueva);
console.log(nuevacad); 

//Ejercicio 21
function encontraranemo(cad) {
  let palabras = cad.split(" ");
  let ubicnemo = palabras.indexOf("Nemo");

  if (ubicnemo !== -1) {
    return `¡Encontré a Nemo en la posición ${ubicnemo + 1}!`;
  } else {
    return "No se encontró a Nemo";
  }
}

let cadenaDePalabras = "Hola soy Nemo, buscándome";
let mensaje = encontraranemo(cadenaDePalabras);
console.log(mensaje); 

//Ejercicio 22
function convertirmayuscultimletra(cadena) {
  let palabras = cadena.split(" ");
  let resultado = [];

  for (let palabra of palabras) {
    if (palabra.length > 0) {
      let nuevapalabra = palabra.slice(0, -1) + palabra.slice(-1).toUpperCase();
      resultado.push(nuevapalabra);
    } else {
      resultado.push("");
    }
  }

  return resultado.join(" ");
}

let cadoriginal = "Luis Poma Ordoñez";
let cadmodif = convertirmayuscultimletra(cadoriginal);
console.log(cadmodif); 






