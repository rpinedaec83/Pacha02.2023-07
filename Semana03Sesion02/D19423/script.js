for (let index = 0; index < 10; index++) {
    console.log(index);
}

let arr_frutas= ["manzana", "fresa", "uva"]

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
}

arr_frutas[0] ="naranja";

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
}

arr_frutas.forEach(element => { 
    if(element=="fresa"){
        console.log("te recomiendo un batido de fresa")
    }
    else{
        console.log("te recomiendo un jugo de "+ element)
    }

});

let bandera = true;

while (bandera) {
    arr_frutas.forEach(element => { 
        if(element=="fresa"){
            console.log("te recomiendo un batido de fresa")
            bandera = false
        }
        else{
            console.log("te recomiendo un jugo de "+ element)
        }
    
    });
}

let n = 0
while (n < 10) {
    n++
    console.log(n)
}

// do {
    
// } while (condition);

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
    if(element == "fresa"){
        break;
    }
}

for (const key in arr_frutas) {
    if (Object.hasOwnProperty.call(arr_frutas, key)) {
        const element = arr_frutas[key];
        console.log(element)
    }
}


let auto = {
    color:"rojo",
    nro_puertas: 2,
    nro_ruedas : 4,

    acelerar(){
        console.log("aumentar velocidad")
    },
    frenar(){
        console.log("reducir velocidad")
    }
    ,
    girar(direccion){
        console.log("girar hacia la "+ direccion)
    }
}

console.log(auto.color)
console.log(auto.nro_puertas)

auto.acelerar()
auto.girar("derecha")

console.log(auto)

for (const key in auto) {
    if (Object.hasOwnProperty.call(auto, key)) {
        const element = auto[key];
        console.log(element)
    }
}


// 1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
let respuesta = prompt("Escriba el numero")

let numero = parseInt(respuesta)
if(numero > 99 && numero < 1000){
    alert("tiene 3 digitos")
}else{
    alert("no tiene 3 digitos")
}