// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor

let numero1 = parseInt(prompt("Escribir primer numero"))
let numero2 = parseInt(prompt("Escribir segundo numero"))

if(numero1 > numero2){
     document.write("El numero mayor es: "+numero1)
}
else{
    document.write("El numero mayor es: "+numero2)
}