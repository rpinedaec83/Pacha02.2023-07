for (let index = 0; index < 10; index++) {
    console.log(index)
}

let arr_frutas = ["pera","fresa","mandarina"]

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
}
console.log("------------")
arr_frutas[0] = "uvas"
for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
}
console.log("------------")
arr_frutas.forEach(element => { console.log(element)});
console.log("------------")
arr_frutas.forEach(element => {

    if(element == "fresa"){
        console.log("te recomiendo un batido de fresa")
    }
    else{
        console.log("te recomiendo un jugo")
    }
});

console.log("------------")

let bandera = true;

while (bandera){

    arr_frutas.forEach(element => {

        if(element == "fresa"){
            console.log("te recomiendo un batido de fresa")
            bandera = false
        }
        else{
            console.log("te recomiendo un jugo")
        }
    });

}

console.log("------------")

let n = 0

while(n<10){
    console.log(n)
    n++
}

console.log("------------")

//do{
//
//}while(condition)

for (let index = 0; index < arr_frutas.length; index++) {
    const element = arr_frutas[index];
    console.log(element)
    if(element=="fresa"){
        break;
    }
}

console.log("------------")

for(const key in arr_frutas){
    if(Object.hasOwnProperty.call,arr_frutas){

    }
}

console.log("------------")

let auto = {
    marca:"toyota",
    modelo:"corolla",
    color:"rojo",
    nro_puertas:2,
    nro_ruedas:4,

    acelerar(){
        console.log("Subiendo la velocidad")
    }
    ,
    frenar(){
        console.log("Bajando la velocidad")
    }
    ,
    girar(direccion){
        console.log("Girando a la "+direccion)
    }
}
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.color);
auto.acelerar();
auto.girar("derecha");
auto.frenar();