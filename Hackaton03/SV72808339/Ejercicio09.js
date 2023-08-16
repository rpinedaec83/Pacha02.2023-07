/* 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar 
en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.*/

const sueldo =  1800;
let aumento = 0;

if (sueldo < 2000){
    aumento = 0.1;
} else{
    aumento = 0.05;
}

console.log("Sueldo anterior:  $"+ sueldo)
console.log("Aumento:          "+ aumento*100 +"%")
console.log("Nuevo sueldo:     $"+ (sueldo + (aumento*sueldo)) )