const Aerolinea = function () {
    let Nombre;
    let Ubicacion;
    function configurar() {
        let titulo = document.getElementById("nombre_aerolinea");
        titulo.innerHTML = Nombre;
        let sede = document.getElementById("ubicacion")
        sede.innerHTML = Ubicacion;
    }
    function eventos() {
        document.getElementById("reservar").addEventListener("click", reservar_vuelo);
    }
    function reservar_vuelo() {
        origen = prompt("Escribir ciudad origen")
        destino = prompt("Escribir ciudad destino")
        fecha_ida = prompt("Escribir fecha de ida")
        fecha_vuelta = prompt("Escribir fecha de vuelta")

    }

    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion = parametros.Ubicacion;
            configurar();
            eventos();
        }
    }
}();

class Aviones {
    constructor(matricula,asientos,capacidad_min){
        this.matricula = matricula;
        this.asientos = asientos;
        this.capacidad_min = capacidad_min;
        this.habilitado = false;
        this.reservado = 0;
        this.pasajeros = [];
    }

    agregar_pasajero(pasajero){
        if(this.reservado >= this.capacidad_min){
            this.habilitado = true;
        }
        this.pasajeros.push(pasajero);
        this.reservado++;

    }
}

class Reservas {
    constructor(origen,destino,fecha_ida,fecha_vuelta){
        this.origen = origen;
        this.destino = destino;
        this.fecha_ida = fecha_ida;
        this.fecha_vuelta = fecha_vuelta;
        this.avion_ida = null;
        this.avion_vuelta = null;
    }

    asignar_avion_ida(avion){
        this.avion_ida = avion;
    }

    asignar_avion_vuelta(avion){
        this.avion_vuelta = avion;
    }
}

class Pasajeros{
    constructor(nombre,apellido,documento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
    }
}