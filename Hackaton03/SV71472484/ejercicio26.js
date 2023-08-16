// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

let dividendo = parseInt(prompt("Ingrese el dividendo: "))
let divisor = parseInt(prompt("Ingrese el divisor: "))
let cociente = 0
let resto = 0

if (dividendo > 0 && divisor > 0) {  
    while (dividendo >= divisor) { 
        dividendo = dividendo - divisor
        cociente = cociente + 1
        }
    resto = dividendo
    document.write("El cociente es: "+ cociente) 
    document.write("<br>El resto es: "+ resto) 
}
else{
    document.write("Ingrese numeros positivo") 
}