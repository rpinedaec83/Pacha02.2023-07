//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

const num = -57;

if (num === 0){
    console.log("El número es 0. Imposible determinar su signo.")
} 
else{
    if (num > 0){
        console.log("El número NO es negativo, es positivo.")
    }
    else{
        console.log("El número ES negativo.")
    }
}