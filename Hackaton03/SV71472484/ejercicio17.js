// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

let hora= parseInt(prompt("Ingresar hora(formato 24 horas):"))
let min= parseInt(prompt("Ingresar minutos:"))
let seg= parseInt(prompt("Ingresar segundos:"))

seg = seg + 1

if (seg==60)
{
    seg = 0
    min = min + 1
}
if (min==60)
{
    min = 0
    hora = hora + 1
}
if (seg==24)
{
    hora = 0
}


document.write("La hora dentro de un segundo adicional: "+hora+":"+min+":"+seg)