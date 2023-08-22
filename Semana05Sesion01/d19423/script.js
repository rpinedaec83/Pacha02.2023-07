class Vehiculos {
    constructor(nro_placa,color,marca,velocidad)
    {
        this.nro_placa = nro_placa;
        this.color = color;
        this.marca = marca;
        this.velocidad = velocidad
    }

    acelerar(){
        return `El vehiculo ${this.marca} esta acelerando`
    }

    frenar(){
        return `El vehiculo ${this.marca} esta frenando`
    }
}

class Autos extends Vehiculos{
    #cilindraje = 0
    constructor(nro_placa,color,marca,velocidad,descapotable = false){
        super(nro_placa,color,marca,velocidad)
        this.aire_acondicionado = false;
        this.descapotable = descapotable
        
    }
    encender_ac(){
        this.aire_acondicionado = true;
        return `El aire acondicionado de ${this.marca} a sido encendido`
    }
    get get_cilindraje(){
        return this.#cilindraje
    }
    set set_cilindraje(new_value){
        this.#cilindraje = new_value
    }
}

class Motos extends Vehiculos{
    constructor(nro_placa,color,marca,velocidad){
        super(nro_placa,color,marca,velocidad)
        this.en_una_sola_rueda = false;
    }
    rodar_en_una_sola_rueda(){
        this.en_una_sola_rueda = true;
        return `Esta moto esta rodando en una sola rueda`
    }
    acelerar(){
        return `La moto ${this.marca} esta acelerando`
    }

    frenar(){
        return `La moto ${this.marca} esta frenando`
    }
}



let fiat = new Autos("ABC098","Rojo","Fiat",180);
fiat.acelerar()
console.log(fiat.acelerar())

let  porsche = new Autos("POT069", "Azul", "Porsche Carrera GT", 330, true )
porsche.color = "Verde"

console.log(porsche.get_cilindraje)
porsche.set_cilindraje = 4000
console.log(porsche.get_cilindraje)

console.log(fiat)
console.log(porsche)

let ducati =  new Motos("MTO097", "Azul", "Diavel V4", 250)
console.log(ducati.acelerar())
console.log(ducati.frenar())

ducati.rodar_en_una_sola_rueda()

fiat.encender_ac()


console.log(fiat.valueOf())

let arr_datos = ["1",2,3,4,"5"]
console.log(arr_datos)


function Vehicle(brand, wheel){
    this.brand = brand;
    this.wheel = wheel;
    this.get_brand =function(){
        return `my brand is ${this.brand}`
    }
    this.get_whell = function(){
        return `my wheel is ${this.wheel}`
    }
}

function Motocycle({brand, wheel}){
    this.wheel = wheel;
    this.brand = brand;
    this.velocity = "100 km/h"
    this.get_velocity = function(){
        return `the velocity is ${this.velocity}`
    }
}

Motocycle.prototype =new Vehicle();

let harley = new Motocycle({
    brand : "Harley-Davidson",
    wheel : 2
})

console.log(harley.get_brand())
console.log(harley.get_whell())
console.log(harley.get_velocity())


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "Ecuatoriana";
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  console.log(Person)

  let papa = new Person("Rene", "Pineda", 58, "brown")
  console.log(papa.nationality)
  console.log(papa.name())

  let mama = new Person("Miriam", "Lopez", 57, "brown")

  console.log(mama.nationality)
  mama.nationality = "Colombiana"
  console.log(mama.nationality)