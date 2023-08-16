// 4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
let respuesta1 = prompt("Escribir primer numero")
let numero1 = parseInt(respuesta1)

let respuesta2 = prompt("Escribir segundo numero")
let numero2 = parseInt(respuesta2)

let respuesta3 = prompt("Escribir tercer numero")
let numero3 = parseInt(respuesta3)

if(numero1 <= numero2 && numero1 <= numero3){
    if(numero2 <= numero3)
    document.write("De menor a mayor: "+numero1+", "+numero2+", "+numero3)
    else
    document.write("De menor a mayor: "+numero1+", "+numero3+", "+numero2)
}else if(numero2 <= numero1 && numero2 <= numero3){
    if(numero1 <= numero3)
    document.write("De menor a mayor: "+numero2+", "+numero1+", "+numero3)
    else
    document.write("De menor a mayor: "+numero2+", "+numero3+", "+numero1)
}
else{
    if(numero1 <= numero2)
    document.write("De menor a mayor: "+numero3+", "+numero1+", "+numero2)
    else
    document.write("De menor a mayor: "+numero3+", "+numero2+", "+numero1)
}