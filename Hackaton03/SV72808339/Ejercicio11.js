/* 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor. */

const n1 = 42, n2 = 28, n3 = 64;

if (n1 > n2 && n1 > n3){
    console.log("El número mayor es: "+n1);
} else if(n2 > n3){
    console.log("El número mayor es: "+n2)
} else{
    console.log("El número mayor es: "+n3)
}