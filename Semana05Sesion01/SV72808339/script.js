class Vehiculo {
    constructor(placa,color,marca,velocidad)
    {
        this.placa = placa;
        this.color = color;
        this.marca = marca;
        this.velocidad = velocidad;
    }
    acelerar(){
        console.log(`El vehículo ${this.marca} está acelerando a ${this.velocidad}km/h`)
    }
    frenar(){
        console.log(`El vehículo ${this.marca} está frenando`)
    }
}

class Auto extends Vehiculo{
    constructor(placa,color,marca,velocidad){
        super(placa,color,marca,velocidad)
        this.aire_acondicionado = false;
    }
    encender_ac(){
        this.aire_acondicionado = true;
        console.log(`El aire acondicionado del ${this.marca} ha sido encendido`)
    }
    acelerar(){
        console.log(`El auto ${this.marca} está acelerando a ${this.velocidad}km/h`)
    }
    frenar(){
        console.log(`El auto ${this.marca} está frenando`)
    }
}

class Moto extends Vehiculo{
    constructor(placa,color,marca,velocidad){
        super(placa,color,marca,velocidad)
        this.una_ruenda = false;
    }
    en_una_sola_rueda(){
        this.una_ruenda = true;
        console.log(`La moto ${this.marca} se puso en una rueda!`)
    }
    acelerar(){
        console.log(`La moto ${this.marca} está acelerando a ${this.velocidad}km/h`)
    }
    frenar(){
        console.log(`La moto ${this.marca} está frenando`)
    }
}

let fiat500 = new Auto("AH4-23T","blanco","Fiat",150)
fiat500.acelerar();
fiat500.encender_ac();

let panamera = new Auto("PR0-LUX","naranja","Porsche",315)
panamera.acelerar();
panamera.frenar();

let panigale = new Moto("RB4-22H","roja","Ducati",250)
panigale.acelerar();
panigale.en_una_sola_rueda();

function Vehicle(brand, wheel){
    this.brand = brand;
    this.wheel = wheel;
    this.velocity = "100km/h";
    this.get_brand = function(){
        console.log(`My brand is ${this.brand}`);
    }
    this.get_wheel = function(){
        console.log(`My wheels are ${this.wheel}`);
    }
}

function Motorcycle({brand, wheel}){
    this.wheel = wheel;
    this.brand = brand;
    this.velocity = "120km/h";
    this.get_velocity = function(){
        console.log(`The velocity is ${this.velocity}`);
    }
}

Motorcycle.prototype = new Vehicle();

const harley = new Motorcycle({
    brand: "harley",
    wheel: 2
});

harley.get_brand();
harley.get_wheel();

function Person(first,last,age,eye_color){
    this.first = first
    this.last = last
    this.age = age
    this.eye_color = eye_color
}

Person.prototype.nationality = "Ecuadorian"
Person.prototype.name = function(){
    return this.first + " " + this.last
}

console.log(Person);

let papa = new Person("Rene","Pineda",58,"blue");
console.log(papa);
console.log(papa.nationality);
console.log(papa.name());

let mama = new Person("Miriam","Lopez",57,"brown");
console.log(mama.nationality);
mama.nationality = "Colombian";
console.log(mama.nationality);
