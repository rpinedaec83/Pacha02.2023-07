// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
//se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
let respuesta = prompt("Ingrese las horas trabajadas esta semana:")
let numero = parseInt(respuesta)
let sbase = 0
let sextra = 0
let stotal = 0

if(numero <= 40){
    sbase = numero * 20
    sextra = 0
}else{
    sbase = 40 * 20
    sextra = (numero - 40) * 25
}

stotal = sbase + sextra

document.write("Horas Trabajadas: "+numero+"<br>")
document.write("Sueldo Base: $"+sbase+"<br>")
document.write("Sueldo Extra: $"+sextra+"<br>")
document.write("<b>Total: $"+stotal+"</b><br>")
