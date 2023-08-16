// 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
// ¿Cuántos números son Pares?
// ¿Cuál es el mayor de todos?
// Si el tercero es par, calcular el cuadrado del segundo.
// Si el primero es menor que el cuarto, calcular la media de los 4 números.
// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, 
// calcular la suma de los 4 números.

let regla_01 = false
let contador_pares = 0
let regla_02 = true	
let numero_mayor = 0
let regla_03 = false
let cuadrado_segundo = 0
let regla_04 = false
let media = 0
let regla_05 = false
let suma_numeros = 0

let n1 = parseInt(prompt("Escribir Primer numero entero"))
if ( n1%2 == 0) {
    contador_pares = contador_pares + 1
 }
 if (n1 > numero_mayor) {
    numero_mayor = n1
 }
 
let n2 = parseInt(prompt("Escribir Segundo numero entero"))
if ( n2%2 == 0) {
    contador_pares = contador_pares + 1
 }
 if (n2 > numero_mayor) {
    numero_mayor = n2
 } 
 
let n3 = parseInt(prompt("Escribir Tercer numero entero"))
if ( n3%2 == 0) {
    regla_03 = true
    contador_pares = contador_pares + 1
    cuadrado_segundo = n2^2
 }
 if (n3 > numero_mayor) {
    numero_mayor = n3
 }  

let n4 = parseInt(prompt("Escribir Cuarto numero entero"))
if ( n4%2 == 0) {
    contador_pares = contador_pares + 1
 }
 if (n4 > numero_mayor) {
    numero_mayor = n4
 }  
    
 if (n4 > n1) {
    regla_04 = true
    media = (n1 + n2 + n3 + n4)/4	
 } 

 if (n2 > n3) {
    if (n3 >50 && n3 <700 ) {
        regla_05 = true
        suma_numeros = (n1 + n2 + n3 + n4)
    }
    
 }

 if (contador_pares != 0) {
    regla_01 = true
 }

 //mostrar
 if (regla_01 == true) {
    document.write("La cantidad de numeros pares: "+contador_pares)
 }
 if (regla_02 == true) {
    document.write("<br>El numero mayor es: "+numero_mayor)
 }
 if (regla_03 == true) {
    document.write("<br>El cuadrado del segundo numero es: "+cuadrado_segundo)
 }
 if (regla_04 == true) {
    document.write("<br>La media aritmetica de los 4 numeros es: "+media)
 }
 if (regla_05 == true) {
    document.write("<br>La suma de los 4 numeros es: "+suma_numeros)
 }