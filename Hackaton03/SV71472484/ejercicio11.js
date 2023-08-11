//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

let numero1 = parseInt(prompt("Escribir primer numero"))
let numero2 = parseInt(prompt("Escribir segundo numero"))
let numero3 = parseInt(prompt("Escribir tercer numero"))

if(numero1 > numero2 && numero1 > numero3){
     document.write("El numero mayor es: "+numero1)
}else if(numero2 > numero1 && numero2 > numero3){
    document.write("El numero mayor es: "+numero2)
}
else{
    document.write("El numero mayor es: "+numero3)
}