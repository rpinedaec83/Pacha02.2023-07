// 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

let resultado = 0

for (let index = 1; index <= 9 ; index++) {
  document.write("---------------<br>")
  document.write("Tabla del numero "+ index + ":")
  document.write("<br>")
  for (let num = 1; num <= 10; num++) {
    resultado = index * num
    document.write(index + " x " + num + " = " + resultado+"<br>")
  }  
}