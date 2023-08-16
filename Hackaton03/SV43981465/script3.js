// 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

function terminaEnCuatro(n3){
    const numeroComoCadena = n3.toString();
    const ultimoDigito = numeroComoCadena.charAt(numeroComoCadena.length - 1);
    return ultimoDigito == '4';
}

let n3 = prompt("Ingrese un número: ");
let r3 = terminaEnCuatro(n3);

if(r3){
    alert("El número "+n3+" termina en 4.")
}else{
    alert("El número "+n3+" no termina en 4.")
}