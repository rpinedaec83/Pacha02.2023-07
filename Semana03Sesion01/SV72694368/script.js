//Este es un comentario
//let dias = 2;
//este es otro comentario
//alert("Hola desde JavaScript");
//alert("Otra linea");
/*

todo 
lo 
que 
esta 
aqui 
es 
un 
comentario

*/

var Edad = 0;
//var Sexo;

let EdadLet = 10;
let SexoLet;

const PI = 3.1416

//PI = 3.14157

console.log("La variable edad es: "+Edad)
console.log("La variable edadLet es: "+EdadLet)

Edad = 40
EdadLet = 50

console.log("La variable edad es: "+Edad)
console.log("La variable edadLet es: "+EdadLet)

let saldoTotalDeLaDeuda =1000 //camelCase
let saldo_total_de_la_deuda = 1000 // snake_case ****
let SaldoTotalDeLaDeuda = 1000 // PascalCase

let variable_numerica = 100;
let variable_numerica1 = 100.99;
let variable_numerica2 = -22;

let variable_cadena = "Una cadena de caracteres";
let variable_cadena1 = 'Una cadena de caracteres';
let variable_cadena2 = `hola 
desde 
diferentes
lineas`;

let variable_booleana = true;
let variable_booleana1 = false;

let variable_array = [11, 22, 33, "Hola", 'Chao', true, false]


let variable_dato = 10;
console.log(variable_dato)

variable_dato ++
console.log(variable_dato)

variable_dato --
console.log(variable_dato)

console.log(!variable_booleana)

let estado_civil_persona1 = false
let estado_civil_persona2 = true

console.log(estado_civil_persona1 && estado_civil_persona2)

console.log(estado_civil_persona1 || estado_civil_persona2)


let primer_numero = 11
let segundo_numero = 27

let suma = primer_numero + segundo_numero
let resta = primer_numero - segundo_numero
let multiplicacion = primer_numero * segundo_numero
let division = primer_numero / segundo_numero

console.log("suma: " + suma)
console.log("resta: " + resta)
console.log("multiplicacion: " + multiplicacion)
console.log("division: " + division)

let palabras = "hola"
let despedida = "chao"
let respuesta = palabras+despedida
console.log(respuesta)

respuesta = palabras + suma
console.log(respuesta)

if(suma < 10)
{
    console.log("Es mayor de 10")
    alert("Es mayor a 10")
}
else
{
    console.log("es mayor que 10")
}

if(suma < 10)
    console.log("Es mayor de 10")
    
else if(true)
    console.log("es mayor que 10")

else
    sentencia


if(despedida.length >= 3){
    console.log("Es mayor que 3")
}

if(despedida == "chao")
{
    console.log("ës cierto")
}

let elvisLives = Math.PI > 4 ? "Sip" : "Nop";

console.log(elvisLives)

let tamano_televisor = 420

switch (tamano_televisor) {
    case 42:
        console.log("mi tv es de 42 pulgadas")
        break;
    case 55:
        console.log("mi tv es de 55 pulgadas")
        break;
    case 100:
        console.log("mi tv es de 100 pulgadas")
        break;
                
    default:
        console.log("Tamano no definido")
        break;
}

let tipo_sangre = prompt("Escribe tu tipo de sangre")
switch (tipo_sangre) {
    case "O+":
        console.log("Tu tipo de sangre es muy comun entre los latinoamericanos")
        break;
    case "A-":
        console.log("Tu sangre es especial, procura donar siempre")
        break;
    default:
        console.log("Tipo de sangre no valido")
        break;
}