// 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

let numero = 0
let mayor = 0
let menor  = 0

for (let index = 1; index <= 20 ; index++) {
  numero = parseInt(prompt("Ingrese 20 numeros:"))
  
  if (index == 1) {
    mayor = numero
    menor = numero
  } 

  if (numero > mayor) {
    mayor = numero   
  } else if (numero < menor) {
    menor = numero
  }

}
document.write("El numero mayor es: "+ mayor)
document.write("<br>El numero menor es:" + menor)