const personalPresentation = (nombre, apellido, edad) => {
    return  'Hola, mi nombre es' + nombre + ' ' + apellido + ' y mi edad ' + edad;
}

let presentation = personalPresentation('Gonzalo', 'Quedena', 20);

console.log(presentation);