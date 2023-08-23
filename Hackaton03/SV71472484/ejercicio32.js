// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, 
// hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

let ciudad = ""
let poblacion = 0
let max_poblacion = 0
let ciudad_mas_poblada = 0

for (let i = 1; i <= 11; i++) {
  ciudad = prompt("Ingrese el nombre de la ciudad:")
  poblacion= parseInt(prompt("Ingrese la poblacion de la ciudad:"))

  if (poblacion > max_poblacion ) {
    max_poblacion = poblacion
    ciudad_mas_poblada = ciudad
  }

}
document.write("La ciudad con mayor poblacion es "+ ciudad_mas_poblada + " con "+ max_poblacion + " personas")
