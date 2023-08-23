const Aerolinea = function () {
    let Nombre;
    let Ubicacion;
    let aviones = [];
    function configurar() {
        let titulo = document.getElementById("nombre_aerolinea");
        titulo.innerHTML = Nombre;
        let sede = document.getElementById("ubicacion")
        sede.innerHTML = Ubicacion;
        crear_aviones();
    }
    function crear_aviones(){
        avion1 = new Aviones("TRE484","AIRBUS319",144,72)
        aviones.push(avion1)
        avion2 = new Aviones("QWE729","AIRBUS 320",180,90)
        aviones.push(avion2)
    }

    function eventos() {
        document.getElementById("reservar").addEventListener("click", reservar_vuelo);
    }

    function reservar_vuelo() {
        origen = prompt("Escribir ciudad origen")
        destino = prompt("Escribir ciudad destino")
        fecha_ida = prompt("Escribir fecha de ida")
        fecha_vuelta = prompt("Escribir fecha de vuelta")
        let nueva_reserva = new Reservas(origen,destino,fecha_ida,fecha_vuelta)
        nueva_reserva.asignar_avion_ida(aviones[0]);
        nueva_reserva.asignar_avion_vuelta(aviones[1]);
        let nuevo_pasajero = asignar_pasajeros();
        nueva_reserva.avion_ida.agregar_pasajero(nuevo_pasajero)
        nueva_reserva.avion_vuelta.agregar_pasajero(nuevo_pasajero)

        dibujar_resultados(nueva_reserva);
    }

    function dibujar_resultados(reserva){
        console.log(reserva);
        let nombre_ori = document.getElementById("nombre_ori")
        nombre_ori.innerText = reserva.avion_ida.pasajeros[0].nombres;

        let apellidos_ori = document.getElementById("apellidos_ori")
        apellidos_ori.innerText =  reserva.avion_ida.pasajeros[0].apellidos;

        let nombre_dest = document.getElementById("nombre_dest")
        nombre_dest.innerText = reserva.avion_vuelta.pasajeros[0].nombres;

        let apellidos_dest = document.getElementById("apellidos_dest")
        apellidos_dest.innerText =  reserva.avion_vuelta.pasajeros[0].apellidos;

        let origen = document.getElementById("origen")
        origen.innerText = reserva.origen;

        let destino = document.getElementById("destino")
        destino.innerText = reserva.destino;

        let fechas = document.getElementById("fechas")
        fechas.innerText = `Desde el ${reserva.fecha_ida} al ${reserva.fecha_vuelta}`;

        let avion_ida = document.getElementById("avion_ida")
        avion_ida.innerText = reserva.avion_ida.matricula;

        let avion_vuelta = document.getElementById("avion_vuelta");
        avion_vuelta.innerText = reserva.avion_vuelta.matricula;

        let div_reserva =document.getElementById("div_reserva");
        div_reserva.style.display  = "block";

    }

    function asignar_pasajeros(){
        let nombre = prompt("Escribe tu nombre")
        let apellido = prompt("Escribe tus apellidos")
        let documento = promt("Escribe tu documento") 
        let pasa
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