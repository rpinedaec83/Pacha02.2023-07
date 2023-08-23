//Ejercicio 1
// Paso 1: Solicitar al usuario que ingrese un número por el teclado
const numeroIngresado = prompt("Ingresa un número:");

// Paso 2: Verificar si el número tiene tres dígitos
const esTresDigitos = numeroIngresado.length === 3 && !isNaN(numeroIngresado);

// Paso 3: Mostrar el resultado al usuario
if (esTresDigitos) {
  console.log("El número ingresado tiene tres dígitos.");
} else {
  console.log("El número ingresado NO tiene tres dígitos.");
}


//Ejercicio2
// Pedir al usuario que ingrese un número entero
const numeroStr = prompt("Ingrese un número entero:");

// Convertir el input a un número entero usando parseInt
const numero = parseInt(numeroStr);

// Verificar si el número es negativo
if (numero < 0) {
  console.log("El número es negativo.");
} else if (numero === 0) {
  console.log("El número es cero, no es ni positivo ni negativo.");
} else {
  console.log("El número es positivo.");
}


//Ejercicio 3
// Pedir al usuario que ingrese un número
const numeroStr1 = prompt("Ingrese un número:");

// Convertir el input a un número utilizando parseFloat para manejar números decimales
const numero1 = parseFloat(numeroStr);

// Verificar si el último dígito del número es 4
if (numero % 10 === 4) {
  console.log("El número termina en 4.");
} else {
  console.log("El número no termina en 4.");
}


//Ejercicio4
// Pedir al usuario que ingrese un número
const numeroStr2 = prompt("Ingrese un número:");

// Obtener el último dígito del número convirtiendo a cadena y tomando el último carácter
const ultimoDigito = numeroStr.charAt(numeroStr.length - 1);

// Verificar si el último dígito es igual a '4'
if (ultimoDigito === '4') {
  console.log("El número termina en 4.");
} else {
  console.log("El número no termina en 4.");
}



//Ejercicio 5
//Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
// Pedir al usuario que ingrese un número
const numeroStr3 = prompt("Ingrese un número:");

// Obtener el último dígito del número convirtiendo a cadena y tomando el último carácter
const ultimoDigito3 = numeroStr.charAt(numeroStr.length - 1);

// Verificar si el último dígito es igual a '4'
if (ultimoDigito === '4') {
  console.log("El número termina en 4.");
} else {
  console.log("El número no termina en 4.");
}


//Ejercicio 6
//Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
// Pedir al usuario que ingrese el número de horas trabajadas
const horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en la semana:"));

// Definir las tarifas por hora
const tarifaNormal = 20;
const tarifaHorasExtra = 25;

// Calcular el sueldo semanal
let sueldoSemana = 0;

if (horasTrabajadas <= 40) {
  sueldoSemana = horasTrabajadas * tarifaNormal;
} else {
  const horasNormales = 40;
  const horasExtras = horasTrabajadas - horasNormales;
  sueldoSemana = (horasNormales * tarifaNormal) + (horasExtras * tarifaHorasExtra);
}

console.log(`El sueldo semanal del trabajador es: $${sueldoSemana}`);


//Ejercicio7
//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

 //  Tipo A 10% de descuento
 //  Tipo B 15% de descuento
 //  Tipo C 20% de descuento


// Definir los descuentos para cada tipo de membresía
const descuentos = {
    A: 10, // 10% de descuento para membresía tipo A
    B: 15, // 15% de descuento para membresía tipo B
    C: 20, // 20% de descuento para membresía tipo C
  };

  // Pedir al usuario que ingrese el tipo de membresía (A, B o C)
  const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();

  // Verificar si el tipo de membresía es válido
  if (tipoMembresia in descuentos) {
    // Pedir al usuario que ingrese el monto total de la compra
    const montoTotalCompra = parseFloat(prompt("Ingrese el monto total de la compra:"));

    // Calcular el porcentaje de descuento según el tipo de membresía
    const porcentajeDescuento = descuentos[tipoMembresia];

    // Calcular el monto con descuento
    const montoConDescuento = montoTotalCompra - (montoTotalCompra * (porcentajeDescuento / 100));

    // Mostrar el resultado en la consola
    console.log(`Tipo de membresía: ${tipoMembresia}`);
    console.log(`Monto total de la compra: $${montoTotalCompra}`);
    console.log(`Descuento aplicado: ${porcentajeDescuento}%`);
    console.log(`Monto a pagar con descuento: $${montoConDescuento.toFixed(2)}`);
  } else {
    console.log("Tipo de membresía inválida. No se aplicará ningún descuento.");
  }


  //Ejercicio 8
  //Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
  // Pedir al usuario que ingrese las tres notas
const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

// Calcular el promedio de las tres notas
const promedio = (nota1 + nota2 + nota3) / 3;

// Definir la nota mínima para aprobar (por ejemplo, 5.0)
const notaMinimaAprobacion = 5.0;

// Verificar si el estudiante aprobó o no y mostrar el resultado en la consola
if (promedio >= notaMinimaAprobacion) {
  console.log(`El estudiante aprobó con un promedio de ${promedio.toFixed(2)}.`);
} else {
  console.log(`El estudiante no aprobó. Su promedio fue de ${promedio.toFixed(2)}.`);
}



//Ejercicio9
//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
// Pedir al usuario que ingrese el salario del trabajador
const salarioActual = parseFloat(prompt("Ingrese el salario del trabajador:"));

// Definir los porcentajes de aumento
const porcentajeAumentoMayor = 5;  // 5% de aumento para salarios mayores o iguales a $2000
const porcentajeAumentoMenor = 10; // 10% de aumento para salarios menores a $2000

// Calcular el aumento según el salario
let aumento = 0;

if (salarioActual >= 2000) {
  aumento = salarioActual * (porcentajeAumentoMayor / 100);
} else {
  aumento = salarioActual * (porcentajeAumentoMenor / 100);
}

// Calcular el nuevo salario con el aumento
const nuevoSalario = salarioActual + aumento;

// Mostrar el resultado en la consola
console.log(`Salario actual: $${salarioActual.toFixed(2)}`);
console.log(`Aumento: $${aumento.toFixed(2)}`);
console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);

//Ejercicio10
//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
// Pedir al usuario que ingrese un número
const numero4 = parseInt(prompt("Ingrese un número:"));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
  console.log(`${numero} es un número par.`);
} else {
  console.log(`${numero} es un número impar.`);
}


//Ejercicio 11
//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
// Pedir al usuario que ingrese tres números
const numero5 = parseFloat(prompt("Ingrese el primer número:"));
const numero6 = parseFloat(prompt("Ingrese el segundo número:"));
const numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Encontrar el número mayor utilizando operadores de comparación
let numeroMayor1 = numero1;

if (numero2 > numeroMayor) {
  numeroMayor = numero2;
}

if (numero3 > numeroMayor) {
  numeroMayor = numero3;
}

// Mostrar el resultado en la consola
console.log(`El número mayor es: ${numeroMayor}`);


//Ejercicio12
//Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
// Pedir al usuario que ingrese dos números
const numero7 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Encontrar el número mayor utilizando operadores de comparación
let numeroMayor;

if (numero1 > numero2) {
  numeroMayor = numero1;
} else if (numero2 > numero1) {
  numeroMayor = numero2;
} else {
  console.log("Los dos números son iguales.");
  // Si ambos números son iguales, el algoritmo termina aquí.
  // Puedes decidir cómo manejar esta situación según tus necesidades.
}

// Mostrar el resultado en la consola
console.log(`El número mayor es: ${numeroMayor}`);

//Ejercicio 13
//Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
// Pedir al usuario que ingrese una letra
const letra = prompt("Ingrese una letra:").toLowerCase();

// Verificar si la letra es una vocal
if (letra.length === 1 && /[aeiou]/.test(letra)) {
  console.log(`${letra} es una vocal.`);
} else {
  console.log(`${letra} no es una vocal.`);
}


//Ejercicio 14
//Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }

    // Verificar si el número es divisible por algún número entre 2 y la mitad del número
    for (let i = 2; i <= Math.floor(numero / 2); i++) {
      if (numero % i === 0) {
        return false; // Si es divisible, no es primo
      }
    }

    return true; // Si no es divisible por ningún número, es primo
  }

  // Pedir al usuario que ingrese un número entero del 1 al 9
  const numero8 = parseInt(prompt("Ingrese un número entero del 1 al 9:"));

  // Verificar si el número es válido
  if (numero >= 1 && numero <= 9) {
    // Determinar si el número es primo utilizando la función esPrimo()
    if (esPrimo(numero)) {
      console.log(`${numero} es un número primo.`);
    } else {
      console.log(`${numero} no es un número primo.`);
    }
  } else {
    console.log("El número ingresado no es válido. Debe ser un entero del 1 al 9.");
  }



  //Ejercicio 15
  //Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
  // Función para convertir centímetros a pulgadas
function centimetrosAPulgadas(centimetros) {
    const pulgadas = centimetros / 2.54;
    return pulgadas;
  }

  // Función para convertir libras a kilogramos
  function librasAKilogramos(libras) {
    const kilogramos = libras * 0.45359237;
    return kilogramos;
  }

  // Pedir al usuario que ingrese los valores a convertir
  const centimetros = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
  const libras = parseFloat(prompt("Ingrese la cantidad en libras:"));

  // Realizar las conversiones utilizando las funciones
  const pulgadas = centimetrosAPulgadas(centimetros);
  const kilogramos = librasAKilogramos(libras);

  // Mostrar los resultados en la consola
  console.log(`${centimetros} centímetros equivalen a ${pulgadas.toFixed(2)} pulgadas.`);
  console.log(`${libras} libras equivalen a ${kilogramos.toFixed(2)} kilogramos.`);


//Ejercicio 16
//Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde
// Pedir al usuario que ingrese un número del 1 al 7
const numero11 = parseInt(prompt("Ingrese un número del 1 al 7:"));

// Determinar el día de la semana según el número ingresado
let dia;

switch (numero) {
  case 1:
    dia = "Lunes";
    break;
  case 2:
    dia = "Martes";
    break;
  case 3:
    dia = "Miércoles";
    break;
  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case 6:
    dia = "Sábado";
    break;
  case 7:
    dia = "Domingo";
    break;
  default:
    dia = "Número inválido. Debe ser del 1 al 7.";
    break;
}

// Mostrar el resultado en la consola
console.log(`El número ${numero} corresponde al día: ${dia}`);


//Ejercicio 17
//Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
// Pedir al usuario que ingrese una hora en formato HH:mm:ss
const horaIngresada = prompt("Ingrese una hora en formato HH:mm:ss:");

// Convertir la hora ingresada a un objeto Date
const fechaHora = new Date(`2000-01-01T${horaIngresada}`);

// Verificar si la hora ingresada es válida
if (isNaN(fechaHora.getTime())) {
  console.log("Hora ingresada inválida. Formato esperado: HH:mm:ss");
} else {
  // Agregar un segundo a la hora
  fechaHora.setSeconds(fechaHora.getSeconds() + 1);

  // Obtener la hora actualizada en formato HH:mm:ss
  const horaActualizada = fechaHora.toTimeString().slice(0, 8);

  // Mostrar la hora actualizada en la consola
  console.log(`La hora dentro de un segundo es: ${horaActualizada}`);
}



//Ejercicio18
// Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

//$10. Si se compran unidades separadas hasta 9.

//$8. Si se compran entre 10 unidades hasta 99.

//$7. Entre 100 y 499 unidades.

//$6. Para mas de 500 unidades.

//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
// Pedir al usuario que ingrese el número de CDs a vender
const cantidadCDs1 = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));

// Definir los precios por cantidad
const precio1a98 = 10;
const precio10a993 = 8;
const precio100a4994 = 7;
const precioMasDe5005 = 6;

// Inicializar el precio total y la ganancia para el vendedor
let precioTotal6 = 0;
let gananciaVendedor7 = 0;

// Calcular el precio total según la cantidad de CDs vendidos
if (cantidadCDs >= 1 && cantidadCDs <= 9) {
  precioTotal = cantidadCDs * precio1a9;
} else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
  precioTotal = cantidadCDs * precio10a99;
} else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
  precioTotal = cantidadCDs * precio100a499;
} else if (cantidadCDs >= 500) {
  precioTotal = cantidadCDs * precioMasDe500;
} else {
  console.log("Cantidad inválida. Debe ser un número positivo.");
}

// Calcular la ganancia para el vendedor (8.25% de la venta)
gananciaVendedor = precioTotal * 0.0825;

// Mostrar el resultado en la consola
console.log(`Cantidad de CDs vendidos: ${cantidadCDs}`);
console.log(`Precio total para el cliente: $${precioTotal.toFixed(2)}`);
console.log(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);


//Ejercicio 19
//Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

//Cajero (56$/día).

// Servidor (64$/día).

// Preparador de mezclas (80$/día).

// Mantenimiento (48$/día).

// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

//// Pedir al usuario que ingrese el número de CDs a vender
const cantidadCDs = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));

// Definir los precios por cantidad
const precio1a9 = 10;
const precio10a99 = 8;
const precio100a499 = 7;
const precioMasDe500 = 6;

// Inicializar el precio total y la ganancia para el vendedor
let precioTotal = 0;
let gananciaVendedor = 0;

// Calcular el precio total según la cantidad de CDs vendidos
if (cantidadCDs >= 1 && cantidadCDs <= 9) {
  precioTotal = cantidadCDs * precio1a9;
} else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
  precioTotal = cantidadCDs * precio10a99;
} else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
  precioTotal = cantidadCDs * precio100a499;
} else if (cantidadCDs >= 500) {
  precioTotal = cantidadCDs * precioMasDe500;
} else {
  console.log("Cantidad inválida. Debe ser un número positivo.");
}

// Calcular la ganancia para el vendedor (8.25% de la venta)
gananciaVendedor = precioTotal * 0.0825;

// Mostrar el resultado en la consola
console.log(`Cantidad de CDs vendidos: ${cantidadCDs}`);
console.log(`Precio total para el cliente: $${precioTotal.toFixed(2)}`);
console.log(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);


//Ejercicio 20
// Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//¿Cuántos números son Pares?

//¿Cuál es el mayor de todos?

//Si el tercero es par, calcular el cuadrado del segundo.

//Si el primero es menor que el cuarto, calcular la media de los 4 números.

//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
// Pedir al usuario que ingrese 4 números enteros positivos
const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));
const num3 = parseInt(prompt("Ingrese el tercer número:"));
const num4 = parseInt(prompt("Ingrese el cuarto número:"));

// Inicializar las variables para almacenar los resultados
let pares = 0;
let mayor = 0;
let resultado1 = 0;
let resultado2 = 0;
let resultado3 = 0;

// Verificar si cada número es par y contar cuántos son pares
if (num1 % 2 === 0) {
  pares++;
}

if (num2 % 2 === 0) {
  pares++;
}

if (num3 % 2 === 0) {
  pares++;
}

if (num4 % 2 === 0) {
  pares++;
}

// Encontrar el número mayor
mayor = Math.max(num1, num2, num3, num4);

// Verificar si el tercero es par y calcular el cuadrado del segundo
if (num3 % 2 === 0) {
  resultado1 = num2 ** 2;
}

// Verificar si el primero es menor que el cuarto y calcular la media
if (num1 < num4) {
  resultado2 = (num1 + num2 + num3 + num4) / 4;
}

// Verificar si el segundo es mayor que el tercero y si el tercero está entre 50 y 700
if (num2 > num3 && num3 >= 50 && num3 <= 700) {
  resultado3 = num1 + num2 + num3 + num4;
}

// Mostrar los resultados en la consola
console.log(`Cantidad de números pares: ${pares}`);
console.log(`El número mayor es: ${mayor}`);

if (resultado1 !== 0) {
  console.log(`El cuadrado del segundo número es: ${resultado1}`);
}

if (resultado2 !== 0) {
  console.log(`La media de los 4 números es: ${resultado2}`);
}

if (resultado3 !== 0) {
  console.log(`La suma de los 4 números es: ${resultado3}`);
}



//Ejercicio 21
//Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
// Pedir al usuario que ingrese un número entero positivo
const numero12 = parseInt(prompt("Ingrese un número entero positivo:"));

// Verificar si el número ingresado es válido
if (isNaN(numero) || numero < 0) {
  console.log("Número inválido. Debe ser un entero positivo.");
} else {
  // Inicializar el resultado del factorial como 1
  let factorial = 1;

  // Calcular el factorial utilizando un bucle for
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  // Mostrar el resultado en la consola
  console.log(`El factorial de ${numero} es: ${factorial}`);
}


//Ejercicio 22
//Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
// Pedir al usuario que ingrese un número entero positivo
const n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros n números:"));

// Verificar si el número ingresado es válido
if (isNaN(n) || n < 1) {
  console.log("Número inválido. Debe ser un entero positivo.");
} else {
  // Inicializar la variable para almacenar la suma
  let suma = 0;

  // Calcular la suma utilizando un bucle for
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  // Mostrar el resultado en la consola
  console.log(`La suma de los primeros ${n} números es: ${suma}`);
}



//Ejercicio 23
//Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
// Pedir al usuario que ingrese un número entero positivo
const n1 = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a n:"));

// Verificar si el número ingresado es válido
if (isNaN(n) || n < 1) {
  console.log("Número inválido. Debe ser un entero positivo.");
} else {
  // Inicializar la variable para almacenar la suma
  let sumaImpares = 0;

  // Calcular la suma de los números impares utilizando un bucle for
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sumaImpares += i;
    }
  }

  // Mostrar el resultado en la consola
  console.log(`La suma de los números impares menores o iguales a ${n} es: ${sumaImpares}`);
}



//Ejercicio 24
//Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
// Inicializar la variable para almacenar la suma de los números pares
let sumaPares = 0;

// Calcular la suma de los números pares utilizando un bucle for
for (let i = 2; i <= 1000; i += 2) {
  sumaPares += i;
}

// Mostrar el resultado en la consola
console.log(`La suma de todos los números pares hasta 1000 es: ${sumaPares}`);



//Ejercicio 25
//Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  // Pedir al usuario que ingrese un número entero no negativo
  const numero21 = parseInt(prompt("Ingrese un número entero no negativo para calcular su factorial:"));

  // Verificar si el número ingresado es válido
  if (isNaN(numero) || numero < 0) {
    console.log("Número inválido. Debe ser un número entero no negativo.");
  } else {
    // Calcular el factorial utilizando la función recursiva
    const resultado = factorial(numero);

    // Mostrar el resultado en la consola
    console.log(`El factorial de ${numero} es: ${resultado}`);
  }


  //Ejercicio 26
  //Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
  // Pedir al usuario que ingrese el dividendo y el divisor
const dividendo = parseInt(prompt("Ingrese el dividendo:"));
const divisor = parseInt(prompt("Ingrese el divisor:"));

// Verificar si los números ingresados son válidos
if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
  console.log("Números inválidos. Deben ser números enteros y el divisor no puede ser cero.");
} else {
  // Inicializar variables para almacenar el cociente y el resto
  let cociente = 0;
  let resto = dividendo;

  // Calcular el cociente y el resto utilizando restas sucesivas
  while (resto >= divisor) {
    resto -= divisor;
    cociente++;
  }

  // Mostrar el resultado en la consola
  console.log(`El cociente de la división es: ${cociente}`);
  console.log(`El resto de la división es: ${resto}`);
}




//Ejercicio 27
//Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
// Inicializar variables para almacenar la suma y la cantidad de números ingresados
let suma = 0;
let cantidadNumeros = 0;

// Leer los números ingresados por el usuario hasta que se ingrese un número negativo
let numero31 = parseInt(prompt("Ingrese un número positivo (o un número negativo para terminar):"));

while (numero >= 0) {
  // Verificar si el número ingresado es válido (positivo)
  if (!isNaN(numero) && numero >= 0) {
    suma += numero;
    cantidadNumeros++;
  }

  // Pedir al usuario el siguiente número
  numero = parseInt(prompt("Ingrese otro número positivo (o un número negativo para terminar):"));
}

// Calcular la media de los números ingresados
let media = 0;

if (cantidadNumeros > 0) {
  media = suma / cantidadNumeros;
}

// Mostrar el resultado en la consola
console.log(`La media de los números ingresados es: ${media}`);



//Ejercicio28
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
// Inicializar la variable para almacenar la suma
let suma10 = 0;

// Inicializar el contador para el ciclo repetir
let contador = 1;

// Realizar el ciclo repetir para sumar los números desde 1 hasta 100
do {
  suma += contador;
  contador++;
} while (contador <= 100);

// Mostrar el resultado en la consola
console.log(`La suma de los primeros cien números es: ${suma}`);



//Ejercicio 29
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras
// Inicializar la variable para almacenar la suma
let suma9 = 0;

// Inicializar el número actual que se está sumando
let numeroActual = 1;

// Realizar el ciclo mientras para sumar los números desde 1 hasta 100
while (numeroActual <= 100) {
  suma += numeroActual;
  numeroActual++;
}

// Mostrar el resultado en la consola
console.log(`La suma de los primeros cien números es: ${suma}`);




//Ejercicio 30
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
// Inicializar la variable para almacenar la suma
let suma7 = 0;

// Realizar el ciclo for para sumar los números desde 1 hasta 100
for (let numero = 1; numero <= 100; numero++) {
  suma += numero;
}

// Mostrar el resultado en la consola
console.log(`La suma de los primeros cien números es: ${suma}`);



//Ejercicio31
//Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
// Inicializar variables para almacenar la suma de números pares e impares
let sumaPares8 = 0;
let sumaImpares = 0;

// Inicializar variable para contar la cantidad de números pares e impares ingresados
let cantidadPares = 0;
let cantidadImpares = 0;

// Leer diez números ingresados por el usuario
for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));

  if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      sumaPares += numero;
      cantidadPares++;
    } else {
      sumaImpares += numero;
      cantidadImpares++;
    }
  }
}

// Calcular la media de los números pares e impares
let mediaPares = 0;
let mediaImpares = 0;

if (cantidadPares > 0) {
  mediaPares = sumaPares / cantidadPares;
}

if (cantidadImpares > 0) {
  mediaImpares = sumaImpares / cantidadImpares;
}

// Mostrar el resultado en la consola
console.log(`La media de los números pares es: ${mediaPares}`);
console.log(`La media de los números impares es: ${mediaImpares}`);


//Ejercicio 32
//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
// Definir las provincias y sus ciudades
const provincias = ['Provincia 1', 'Provincia 2', 'Provincia 3'];
const ciudades = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3', 'Ciudad 4', 'Ciudad 5', 'Ciudad 6', 'Ciudad 7', 'Ciudad 8', 'Ciudad 9', 'Ciudad 10', 'Ciudad 11'];

// Crear un objeto para almacenar la población de cada ciudad
const poblacionCiudades = {};

// Pedir al usuario que ingrese la población de cada ciudad
for (let i = 0; i < ciudades.length; i++) {
  const poblacion = parseInt(prompt(`Ingrese la población de ${ciudades[i]}:`));

  // Verificar si el valor ingresado es un número válido
  if (!isNaN(poblacion)) {
    poblacionCiudades[ciudades[i]] = poblacion;
  } else {
    console.log('Valor inválido. Ingrese un número.');
  }
}

// Encontrar la ciudad con la mayor población
let ciudadMayorPoblacion = '';
let mayorPoblacion = 0;

for (const ciudad in poblacionCiudades) {
  if (poblacionCiudades[ciudad] > mayorPoblacion) {
    mayorPoblacion = poblacionCiudades[ciudad];
    ciudadMayorPoblacion = ciudad;
  }
}

// Mostrar el resultado en la consola
if (ciudadMayorPoblacion !== '') {
  console.log(`La ciudad con la mayor población es: ${ciudadMayorPoblacion}, con una población de ${mayorPoblacion} personas.`);
} else {
  console.log('No se ingresaron datos válidos para calcular la ciudad con la mayor población.');
}



//Ejercicio 33
//Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
let continuar = true;

while (continuar) {
  // Aquí va el código que se ejecutará en cada iteración del bucle

  // Pedir al usuario si desea continuar o salir
  const opcion = prompt("¿Desea continuar? (Ingrese 's' para continuar o 'n' para salir):");

  // Verificar la opción ingresada por el usuario
  if (opcion.toLowerCase() === 'n') {
    continuar = false;
  }
}

console.log("El programa ha terminado.");



//Ejercicio 34
//Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
// Bucle externo para iterar sobre los números del uno al nueve
for (let numero = 1; numero <= 9; numero++) {
    console.log(`Tabla de multiplicar del ${numero}:`);

    // Bucle interno para iterar sobre los números del uno al diez y mostrar la tabla de multiplicar
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      const resultado = numero * multiplicador;
      console.log(`${numero} x ${multiplicador} = ${resultado}`);
    }

    console.log(); // Imprimir una línea en blanco para separar las tablas de multiplicar
  }





  //Ejercicio 35
  //Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
  // Inicializar las variables para almacenar el número mayor y menor
let numeroMayor7 = -Infinity;
let numeroMenor = Infinity;

// Leer veinte números ingresados por el usuario
for (let i = 1; i <= 20; i++) {
  const numero = parseFloat(prompt(`Ingrese el número ${i}:`));

  // Verificar si el valor ingresado es un número válido
  if (!isNaN(numero)) {
    // Comparar el número con el valor actual del número mayor y menor
    if (numero > numeroMayor) {
      numeroMayor = numero;
    }

    if (numero < numeroMenor) {
      numeroMenor = numero;
    }
  } else {
    console.log('Valor inválido. Ingrese un número.');
  }
}

// Mostrar el resultado en la consola
console.log(`El número mayor es: ${numeroMayor}`);
console.log(`El número menor es: ${numeroMenor}`);


//Ejercicio 36
//Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function fibonacciConFor(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const serie = [0, 1];
      for (let i = 2; i < n; i++) {
        const numeroActual = serie[i - 1] + serie[i - 2];
        serie.push(numeroActual);
      }
      return serie;
    }
  }

  // Ejemplo: calcular los primeros 10 números de la serie de Fibonacci
  const n7 = 10;
  const resultadoConFor = fibonacciConFor(n);
  console.log(resultadoConFor);



  //Ejercicio 37
  //Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
  function euclidesMCD(a, b) {
    // Aplicar el algoritmo de Euclides de forma recursiva
    if (b === 0) {
      return a;
    } else {
      return euclidesMCD(b, a % b);
    }
  }

  // Ejemplo: calcular el MCD de dos números
  const numero18 = 36;
  const numero23 = 48;
  const mcd = euclidesMCD(numero1, numero2);

  console.log(`El Máximo Común Divisor (MCD) de ${numero1} y ${numero2} es: ${mcd}`);


  //Ejercicio 38
  //Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
  function esNumeroPerfecto(numero) {
    if (numero <= 0) {
      return false;
    }

    let sumaDivisores = 0;

    // Calcular la suma de los divisores propios
    for (let i = 1; i <= numero / 2; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }

    // Verificar si el número es perfecto
    return sumaDivisores === numero;
  }

  // Ejemplo: verificar si un número es un número perfecto
  const numero10 = 28;
  const resultado = esNumeroPerfecto(numero);

  if (resultado) {
    console.log(`${numero} es un número perfecto.`);
  } else {
    console.log(`${numero} no es un número perfecto.`);
  }


  //Ejercicio 39
  //Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

  //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
  function aproximacionPi(iteraciones) {
    let pi = 0;
    let signo = 1;

    for (let i = 0; i < iteraciones; i++) {
      const termino = 4 / (2 * i + 1);
      pi += signo * termino;
      signo *= -1;
    }

    return pi;
  }

  // Ejemplo: aproximación de Pi con 1000 iteraciones
  const numeroIteraciones2 = 1000;
  const piAproximado1 = aproximacionPi(numeroIteraciones);
  console.log(`La aproximación de Pi con ${numeroIteraciones} iteraciones es: ${piAproximado}`);


  //Ejercicio 40
  // Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

  //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) ...
  function aproximacionPiNilakantha(iteraciones) {
    let pi = 3;
    let signo = 1;
    let denominador = 2;

    for (let i = 0; i < iteraciones; i++) {
      const termino = 4 / (denominador * (denominador + 1) * (denominador + 2));
      pi += signo * termino;
      signo *= -1;
      denominador += 2;
    }

    return pi;
  }

  // Ejemplo: aproximación de Pi con 1000 iteraciones
  const numeroIteraciones = 1000;
  const piAproximado = aproximacionPiNilakantha(numeroIteraciones);
  console.log(`La aproximación de Pi con ${numeroIteraciones} iteraciones es: ${piAproximado}`);
