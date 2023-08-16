// 2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

let r = prompt("Ingrese un número: ")
let n = parseFloat(r)

if(n < 0){
    alert("El número "+n+" es negativo")
}else{
    alert("El número "+n+" es positivo")
}