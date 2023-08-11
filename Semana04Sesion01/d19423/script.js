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

class Vehiculos{
    constructor(color, nroRuedas, tipoMotor, tipoCombustible){
        this.color = color,
        this.nroRuedas = nroRuedas,
        this.tipoMotor = tipoMotor,
        this.tipoCombustible = tipoCombustible
    }
    acelerar(){
        console.log("Estoy acelerando")
    }
    frenar(){
        console.log("Estoy disminuyendo la velocidad")
    }
    detener(){
        console.log("Estoy quieto")
    }
    girar(direccion){
        console.log("Estoy girando a la "+direccion)
    }
    cargarCombustible(valor = 0){
        
        console.log(`Estoy cargando ${valor} soles de ${this.tipoCombustible} en mi auto de color ${this.color}`)
    }
}

let carro = new Vehiculos("Rojo", 4, "Combustion", "Gasolina");
carro.acelerar()
carro.frenar()
carro.girar("Derecha")
carro.acelerar()
carro.frenar()
carro.girar("Izquierda")
carro.frenar()
carro.detener()
carro.cargarCombustible(50.99)


class Personas{
    constructor(nombres, apellido_paterno, apellido_materno, tipo_documento, numero_documento, sexo, direccion){
        this.nombres = nombres,
        this.apellido_paterno = apellido_paterno,
        this.apellido_materno = apellido_materno,
        this.tipo_documento = tipo_documento,
        this.numero_documento = numero_documento,
        this.sexo=sexo,
        this.direccion = direccion
    }
    cambiar_direccion(nueva_direccion){
        this.direccion = nueva_direccion
    }
}

class Cliente extends Personas{
    
    constructor(idCliente,nombres, apellido_paterno, apellido_materno, tipo_documento, numero_documento, sexo, direccion){
        super(nombres, apellido_paterno, apellido_materno, tipo_documento, numero_documento, sexo, direccion);
        let historial_credito = "BAJO"
        this.idCliente = idCliente
    }

    comprar(producto, cantidad){
        console.log(`estoy comprando ${producto} en la cantidad de ${cantidad}`)
        this.historial_credito = "ALTO"
    }
    get get_historial() {
        return this.historial_credito;
    }
    set cambiar_historial(historial) {
        this.historial_credito = historial;
    }
}

const mi_primer_cliente = new Cliente(1,"Roberto David","Pineda","Lopez","DNI","001575291","Masculino","Lima")


console.log(mi_primer_cliente.nombres)

console.log(mi_primer_cliente.direccion)
mi_primer_cliente.cambiar_direccion("Chiclayo")
console.log(mi_primer_cliente.direccion)
console.log(mi_primer_cliente.get_historial)
mi_primer_cliente.comprar("Helados",55)
console.log(mi_primer_cliente.get_historial)
mi_primer_cliente.cambiar_historial = "BAJO"
console.log(mi_primer_cliente.get_historial)

class EquiposElectronicos{
    constructor(voltaje,tipo){
        this.voltaje = voltaje,
        this.tipo = tipo
    }
    encender(){
        console.log(`Me encendi y estoy consumiendo ${this.voltaje} voltios`)
    }
    apagar(){
        console.log(`Deje de consumir ${this.voltaje} voltios y me apague`)
    }
}

class Televisores extends EquiposElectronicos{
    constructor(voltaje, tipo, pulgadas, tecnologia){
        super(voltaje,tipo)
        let ubicacion = "";
        this.pulgadas = pulgadas,
        this.tecnologia = tecnologia
    }

    get get_ubicacion(){
        return this.ubicacion
    }
    set set_ubicacion(nueva_ubicacion){
        this.ubicacion = nueva_ubicacion
    }

    subir_volumen(){
        console.log("subiendo el volumen")
    }
    cambiar_canal(numero_canal){
        console.log(`cambiando al canal ${numero_canal}`)
    }
}

let tv1 = new Televisores(220, "Hogar", 55, "LED")

console.log(tv1.get_ubicacion)
tv1.set_ubicacion = "Sala"
console.log(tv1.get_ubicacion)
tv1.encender()
tv1.subir_volumen()
tv1.cambiar_canal(99)
tv1.apagar()
