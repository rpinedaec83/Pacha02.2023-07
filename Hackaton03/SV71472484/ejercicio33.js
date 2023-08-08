// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

let respuesta = ""

do {
  respuesta = prompt("Desea continuar con el programa? (SI/NO)")
} while (respuesta == 'SI');

document.write("El programa termino")