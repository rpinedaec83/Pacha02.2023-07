// 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

let sumaPares = 0
let sumaImpares = 0
let cantPares = 0
let cantImpares = 0
let numero = 0
let mediaPares = 0
let mediaImpares = 0

for (let i = 1; i <= 10; i++) {
  numero = parseInt(prompt("Calculando la media de los numeros pares e impares \n Ingrese diez numeros:"))
  if (numero%2 == 0) {
    sumaPares = sumaPares + numero
    cantPares = cantPares + 1
  } else {
    sumaImpares = sumaImpares + numero
    cantImpares = cantImpares + 1
  }
}

if (cantPares > 0) {
  mediaPares = sumaPares / cantPares
  document.write("La media de los numeros pares es: "+ mediaPares)
} else {
  document.write("No se ingresaron numeros pares")
}

if (cantImpares > 0) {
  mediaImpares = sumaImpares / cantImpares
  document.write("<br>La media de los numeros impares es: "+ mediaImpares)
} else {
  document.write("<br>No se ingresaron numeros impares")
}