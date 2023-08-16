// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta 
// que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

function calcularAumentoSueldo(salarioActual){
    const salarioMayor = 2000;
    const aumentoMayor = 0.05;
    const aumentoMenor = 0.1;

    let aumentoPorcentaje = salarioActual > salarioMayor ? aumentoMayor : aumentoMenor;
    let aumento = salarioActual * aumentoPorcentaje;
    let nuevoSalario = salarioActual + aumento;

    return {salarioActual, aumento, nuevoSalario};
}
let sueldo = parseInt(prompt("Ingrese su sueldo"));
let resultado = calcularAumentoSueldo(sueldo);
alert("Su nuevo sueldo es de "+resultado.nuevoSalario.toFixed(2)+" el aumento es de "+resultado.aumento.toFixed(2));