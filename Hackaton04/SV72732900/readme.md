# HACKATHON SEMANAL

## LOGRO: utilizar nuevas funcionalidades ES6, utilizar métodos de Objetos Nativos y BOM. 

### I.	Es hora de demostrar lo aprendido:
Demostrarás todo lo aprendido en este reto que se basará en las clases dictadas durante la semana.
### II.	Insumos para resolver el Reto:
- https://docs.google.com/document/d/1aJlprbfiKADx-IazY9MMaeB84gsUR-0engVPEkWipNc/edit?usp=sharing
- Conocimientos adquiridos en las semanas posteriores
- Documentación de las semanas anteriores

### III.	Descripción del reto
- Investigar y resolver las preguntas y ejercicios planteados
- Resolver problemas, definir algoritmos, utilizando las nuevas funcionalidades de ES6+ y los métodos de los Objetos de ECMASCRIPT

### IV.	Pasos a seguir para resolver los retos: 

- El docente indicará si este reto se resolverá de manera individual o grupal

## Reto 1:

### TÍTULO: JavaScript y HTTP
Utilizar Javascript para definir algoritmos
EL PROBLEMA: 
En este caso, definiremos una serie de problemas para resolverlos utilizando el lenguaje javascript, definiremos algoritmos por cada problema. 
- Crea una función que retorne la suma de dos números.

```
function sumar(a,b){
    return a + b;
}
```

- Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
  
```
function potencia(x,a){
    return Math.pow(a,x);
}
```
- Crea una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
```
function sumOfCubes(){
    return Array.prototype.reduce.call(arguments, 
        (acc,current) => (
        acc + Math.pow(current, 3)),
        0);
}
```
- Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3
```
function triArea(base, altura){
    return ((base  * altura ) * 0.5)
}
```
- Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
```
const operaciones = {
  "+": (a,b)=>(a + b),
  "-": (a,b)=>(a - b),
  "x": (a,b)=>(a * b),
  "%": (a,b)=>(a / b),
}

function calculator(a, op, b){
    try{
      return operaciones[op](a,b)
    }
    catch{
      return "El parametro no es reconocido"
    }
}
```
### PREGUNTAS: 
- ¿Cómo defines una función?

Con la palabra reservada **function** o tambien inicializando una variable con una *arrow function*
  
- ¿Hasta cuantos argumentos puedes declarar en una función?

NO existe un limite, pero exceder el numero de argumentos puede generar problemas durante el mantenimiento. Lo recomendable es utilizar objetos para ganar flexibilidad.

## Reto 2: 
- Ingresa al siguiente documento 
https://docs.google.com/document/d/1aJlprbfiKADx-IazY9MMaeB84gsUR-0engVPEkWipNc/edit?usp=sharing
- Define los algoritmos por cada ejercicio
- Escribe los algoritmos en javascript

### V.	Solución del reto
- Para que el reto esté cumplido al 100%, se deben haber respondido las preguntas planteadas y se deben haber resuelto los ejercicios

### VI.	Presentación del Reto
- El documento debe ser presentado de manera individual o grupal (según se coordine con el docente)
- El tiempo de cada presentación lo definirá el docente a cargo

### VII.	Feedback
- El docente dará feedback a los estudiantes sobre los ejercicios realizados
