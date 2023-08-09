function Saludar(nombre = "Anonimo"){
    console.log("Hola "+ nombre)
}

let nombre = "Roberto"
Saludar()
Saludar(nombre)

const fnc = ()=>{ console.log("Hola")}
fnc();
const fnc2 =(nombre) => console.log("Hola "+ nombre)
const fnc3=o=>console.log("Hola "+o);
fnc3("David");
fnc2("David")

function restParam(a,b,c, ...rest){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(rest)
}

restParam(1,2,3,4,5,6,7,8,9,10)

function spreadFunc(a,b,c,d,e){
    console.log(a+b+c+d+e)
}

let arrLetras=["a","b","c","d","e"]
spreadFunc(...arrLetras)

function aspiradora(nombre, marca) {
    return{
        marca,
        nombre,
        limpiar(){
            console.log("Esta Limpiando la aspiradora: "+nombre+" de la marca: "+ marca)
        }
    }
}

let asp = aspiradora("Industrial","General Electric")

console.log(asp.nombre)
asp.limpiar()

class Helados{
    constructor(nombre, sabor, precio){
        this.nombre = nombre,
        this.sabor = sabor,
        this.precio = precio
    } 
    vender(){
        console.log("Estoy vendiendo un helado de "+this.sabor)
        console.log("El precio de este helado es: "+ this.precio)
    }
}

let mi_helado = new Helados("Mi super helado", "Fresa", 10.99)
let mi_helado2 = new  Helados("Mi otro super helado","Ron Pasas", 15.00)
mi_helado.vender()
mi_helado2.vender()