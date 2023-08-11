/* 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo. */

const num = 10;
let cont = 0;

if (num <= 10 && num >= 1){

    for (let i = 0; i <= num; i++) {
        if (num%i==0){
            cont++
        }
    }
    if (cont == 2){
        console.log(num+" ES primo.")
    } else{
        console.log(num+" NO es primo.")
    }

}else{
    console.log("El número no está entre el 1 y el 10")
}