let pulgadas;
let kilometros;
    
let centi = prompt('Ingresar centimetros');
let libras = prompt('Ingresar libras');

pulgadas = libras / 2.54;
kilometros = centi / 100000;

document.querySelector('.pulgada').innerHTML = `${libras} libras son ${pulgadas} pulgadas`;
document.querySelector('.kilometro').innerHTML = `${centi} centimetros son ${kilometros} kilometros`;


