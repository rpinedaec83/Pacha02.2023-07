// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
// si generaba menos de $2000 su aumento será de un 10%.

let salario = parseInt(prompt("Ingrese Salario del Trabajador:"))
let aumento = 0
if (salario > 2000) {
    aumento = salario * 0.05
} else {
    aumento = salario * 0.1
}

let total = salario + aumento

document.write("El Nuevo Salario del Trabajador es : "+total)
