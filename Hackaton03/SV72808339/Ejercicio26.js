/* 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas. */

const dividendo = 10, divisor = 4;
let free = dividendo, cociente = 0, resto = 0, flag = true;

while (flag) {
    
    free -= divisor;
    cociente += 1;
    if (free - divisor < 0){
        flag = false;
    }

}

console.log(`Resto = ${free}`)
console.log(`Cociente = ${cociente}`)