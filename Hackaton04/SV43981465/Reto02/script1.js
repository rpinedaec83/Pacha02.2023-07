// Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y 
// los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const persona = (nombre, apellido, edad) => {
    alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`);
}

let n = prompt("Ingrese su nombre:");
let lastName = prompt("Ingrese su apellido:");
let age = prompt("Ingrese su edad:");

persona(n, lastName, age);