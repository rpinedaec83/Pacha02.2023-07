function Saludar(nombre){
    console.log(`Hola ${nombre}`)
}

const name = "Fabricio";

Saludar(name)

const funcion = () =>{ console.log(`holi`) };
funcion();

const funcion2 = (nombre) => console.log(`Hola ${nombre}`)
funcion2("David");

class Helados{
    constructor(nombre,sabor,precio){
        this.nombre = nombre,
        this.sabor = sabor,
        this.precio = precio
    }
    vender(){
        console.log(`Estoy vendiendo un helado de: ${this.sabor}`)
        console.log(`El precio del helado es de: ${this.precio}`)
    }
}

let mi_helado = new Helados("Super helado","Chocolate",10.99)
let mi_helado2 = new Helados("Mega helado","Vainilla",12.49)

mi_helado.vender()
mi_helado2.vender()