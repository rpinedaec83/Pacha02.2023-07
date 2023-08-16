// - Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación 
// matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido”
// calculator(2,"+", 2) ➞ 4

function calculator(n1,n2,op){
    let operacion = 0;
    switch(op){
        case "+":
            operacion = n1 + n2;
            break;
        case "-":
            operacion = n1 - n2;
            break;
        case "x":
            operacion = n1 * n2;
            break;
        case "/":
            operacion = n1 / n2;
            break;
        case "%":
            operacion = (n1 * n2)/100;
            break;
        default:
            alert("El parámetro no es reconocido");
    }
    return operacion;
}

let numero1 = parseFloat(prompt("Ingrese primer número:"));
let numero2 = parseFloat(prompt("Ingrese segundo número:"));
//let operacion = parseFloat(prompt("Ingrese opción de operación: 1.- Suma, 2.- Resta, 3.- Multiplicacion, 4.- Division o 5.- Porcentaje"));
let operacion = prompt("Ingrese opción de operación (+, -, x, /, %):");

const resultado = calculator(numero1, numero2, operacion);

alert("El resultado de la operación es: "+resultado);