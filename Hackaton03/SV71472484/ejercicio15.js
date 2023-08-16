// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

let cen = parseInt(prompt("De Centimetros a Pulgadas:"))
let lib = parseInt(prompt("De Libras a Kilogramos:"))

let pul = cen / 2.54
let kil = lib * 0.453592
      
document.write(cen + " centrimetros equivalen a: " + pul + " pulgadas")
document.write("<br>")
document.write(lib + " libras equivalen a: " + kil + " kilos")