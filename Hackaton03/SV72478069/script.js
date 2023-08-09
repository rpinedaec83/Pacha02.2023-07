// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
/*let respuesta = prompt('Escribe un numero')
let numero = parseInt(respuesta)

if (numero > 99 && numero < 1000) {
    alert('tiene 3 digitos')
} else {
    alert('no tiene 3 digitos')
}*/


// 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

let numeroPar = prompt('Escribe un numero')
let numero = parseInt(numeroPar)

if (isNaN(numero)) {
    alert('No es un numero entero')
} else if (numero < 0) {
    alert('Es un numero Negativo')
} else if (numero === 0) {
    alert('El cero  es un numero entero')
} else {
    alert('El  numero es positivo entero')
}

// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

/*let numero = prompt('escribe un numero')
let numeroFinal = parseInt(numero)

if (isNaN(numeroFinal)) {
    alert('el numero ingresado no es valido')
} else {
    const ultimoDigito = Math.abs(numeroFinal) % 10;
    if (ultimoDigito === 4) {
        alert('el numero ingresado termina en 4')
    } else {
        alert('el numero ingresado no termina en 4')
    }
}*/


// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
/*let numeroEntero1 = prompt('Ingresa el primer numero')
let numeroEntero2 = prompt('Ingresa el segundo numero')
let numeroEntero3 = prompt('Ingresa el tercer numero')

let numero1 = parseInt(numeroEntero1)
let numero2 = parseInt(numeroEntero2)
let numero3 = parseInt(numeroEntero3)

const numerosOrdenados = [numero1, numero2, numero3].sort(function (a, b) {
    return a - b;
})

alert(`los numeros ordenados de mayor a menor son: ${numerosOrdenados[0]}, ${numerosOrdenados[1]}, ${numerosOrdenados[2]}`);*/


// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren.Si son más de diez, se les dará un 10 % de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20 % de descuento; y si son más treinta zapatos se otorgará un 40 % de descuento.El precio de cada zapato es de $80.
/*const cantidadZapatos = prompt('ingresa la cantidad de zapatos que desea comprar')
const cantidad = parseInt(cantidadZapatos)

const precioZapato = 80;
const precioTotalSinDescuento = cantidad * precioZapato

let descuentoPorcentaje = 0;
if (cantidad >= 10 && cantidad <= 20) {
    descuentoPorcentaje = 10;
} else if (cantidad > 20 && cantidad <= 30) {
    descuentoPorcentaje = 20
} else {
    descuentoPorcentaje = 40
}

const descuento = (precioTotalSinDescuento * descuentoPorcentaje) / 100;
const precioTotalConDescuento = precioTotalSinDescuento - descuento;
alert(`Precio total con descuento: $${precioTotalConDescuento.toFixed(2)}`);*/

// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
/*const ingresaHorasTrabajo = prompt('Ingresa tus horas de trabajo')
const horaTrabajada = parseInt(ingresaHorasTrabajo)

const sueldoHora = 20;
const sueldoHoraExtra = 25;

const horasRegulares = Math.min(horaTrabajada, 40);
const horasExtras = Math.max(horaTrabajada - 40, 0);
const sueldoSemanal = (horasRegulares * sueldoHora) + (horasExtras * sueldoHoraExtra);

alert(`Tu sueldo semanal es: ${sueldoSemanal.toFixed(2)}`);*/


// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.Los descuentos son los siguientes:
//    Tipo A 10 % de descuento //    Tipo B 15 % de descuento  //    Tipo C 20 % de descuento
/*const ingreseMonto = prompt('ingrese el monto de compra')
const tipoMembresia = prompt('ingrese el tipo de membresia tiene (A,B o C):')

const montoTotal = parseInt(ingreseMonto)

let descuento = 0;
if (tipoMembresia === 'a') {
    descuento = montoTotal * 0.1;
} else if (tipoMembresia === 'b') {
    descuento = montoTotal * 0.15;
} else if (tipoMembresia === 'c') {
    descuento = montoTotal * 0.2;
} else {
    alert('el tipo de membresia no es valida, no obtendra un descuento en la compra')
}

const montoDescuento = montoTotal - descuento

alert(`el monto a pagar aplicando el desceunto es: ${montoDescuento.toFixed(2)}`)*/


// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
/*const ingresaNota1 = prompt('Ingresar Notas')
const ingresaNota2 = prompt('Ingresar Notas')
const ingresaNota3 = prompt('Ingresar Notas')

const nota1 = parseInt(ingresaNota1)
const nota2 = parseInt(ingresaNota2)
const nota3 = parseInt(ingresaNota3)

const promedioNota = (nota1 + nota2 + nota3) / 3;

if (promedioNota >= 11) {
    alert(`usted aprobo con ${ promedioNota } de nota`)
} else if (promedioNota) {
    alert(`usted desaprobo con ${ promedioNota } de nota`)
}*/


// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5 %, si generaba menos de $2000 su aumento será de un 10 %.
const ingresaSueldo = prompt('ingresa tu sueldo')
const salarioActual = parseInt(ingresaSueldo)

let aumentoPorcentaje = 0;
if (salarioActual > 2000) {
    aumentoPorcentaje = 5;
} else {
    aumentoPorcentaje = 10;
}

const aumento = (salarioActual * aumentoPorcentaje) / 100;
const nuevoSalario = salarioActual + aumento

alert(`su nuevo salario es: ${ nuevoSalario.toFixed(2) }`)


// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.

// 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

// 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes.Los clientes pueden adquirir los artículos(supongamos un único producto de una única marca) por cantidad.Los precios son:

// $10.Si se compran unidades separadas hasta 9.

// $8.Si se compran entre 10 unidades hasta 99.

// $7.Entre 100 y 499 unidades.

// $6.Para mas de 500 unidades.

// La ganancia para el vendedor es de 8, 25 % de la venta.Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
/*const cantidadArticulos = prompt('ingrese la cantidad de articulos que desea comprar')
const totalArticulos = parseInt(cantidadArticulos)

let precioUnitario = 0;
if (totalArticulos >= 1 && totalArticulos <= 9) {
    precioUnitario = 10;
} else if (totalArticulos >= 10 && totalArticulos <= 99) {
    precioUnitario = 8
} else if (totalArticulos >= 100 && totalArticulos <= 499) {
    precioUnitario = 7
} else if (totalArticulos >= 500) {
    precioUnitario = 6
} else {
    alert('Cantidad no valida, por ingrese una cantidad valida')
}

const precioTotal = precioUnitario * totalArticulos

alert(`el precio total a pagar es ${precioTotal.toFixed(2)}`)*/


// 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

// Cajero(56$ / día).

//     Servidor(64$ / día).

//     Preparador de mezclas(80$ / día).

//     Mantenimiento(48$ / día).

//     El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana(6 días máximos).Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

// 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//     ¿Cuántos números son Pares ?

//     ¿Cuál es el mayor de todos ?

//     Si el tercero es par, calcular el cuadrado del segundo.

//     Si el primero es menor que el cuarto, calcular la media de los 4 números.

//     Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

// 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

// 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

// 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

// 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

// 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

// 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

// 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

// 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

// 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory - Leibniz.La formula que se debe aplicar es:

// Pi = (4 / 1) - (4 / 3) + (4 / 5) - (4 / 7) + (4 / 9) - (4 / 11) + (4 / 13) - (4 / 15) ...

// 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha.La formula que se debe aplicar es:

// Pi = = 3 + 4 / (2 * 3 * 4) - 4 / (4 * 5 * 6) + 4 / (6 * 7 * 8) - 4 / (8 * 9 * 10) + 4 / (10 * 11 * 12) - (4 / (12 * 13 * 14) ...
