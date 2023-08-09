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

class Vehículos{
    constructor(color, n_ruedas, motor, combustible){
        this.color = color,
        this.n_ruedas = n_ruedas,
        this.motor = motor,
        this.combustible = combustible
    }

    arrancar(){
        console.log("El vehículo se ha prendido")
    }    
    acelerar(){
        console.log(`Subiendo la velocidad`)
    }
    girar(direccion){
        console.log(`Girando hacia la ${direccion}`)
    }
    frenar(){
        console.log(`Bajando la velocidad`)
    }
    detener(){
        console.log(`Deteniendo el vehículo por completo`)
    }
    describir(){
        console.log(`Este es un auto de color ${this.color}, y tiene ${this.n_ruedas} ruedas`)
    }
    cargar_combustible(valor){
        console.log(`Estoy cargando ${this.valor} soles de ${this.combustible} en mi auto de color ${this.color}`)
    }
}

let susuki = new Vehículos("gris",4,"combustion interna","GLP");
susuki.describir();
susuki.arrancar();
susuki.acelerar();
susuki.girar("derecha");
susuki.acelerar();
susuki.girar("izquierda");
susuki.frenar();
susuki.detener()
susuki.cargar_combustible(60)
