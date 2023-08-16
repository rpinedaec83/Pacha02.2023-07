//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
//entonces las horas extras se le pagarán a $25 por hora.

const horas = 41;
let sueldo = 0;

if (horas<=40){
    sueldo = horas*20
}else{
    sueldo = (horas-40)*25 + 40*20
}

console.log("El sueldo semanal será de: $"+sueldo)