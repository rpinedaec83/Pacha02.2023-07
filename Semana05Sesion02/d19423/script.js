const Aerolinea = function () {
    let Nombre;
    let Ubicacion;
    let aviones =[];
    function configurar(){
        let titulo = document.getElementById("nombre_aerolinea");
        titulo.innerHTML = Nombre
        let sede = document.getElementById("ubicacion")
        sede.innerText = Ubicacion;
        crear_aviones();
    }
    function crear_aviones(){
        avion1 = new Aviones("TRE123","AIRBUS 319",144,72)
        aviones.push(avion1);
        avion2 = new Aviones("QWE456","AIRBUS 320", 180, 90)
        aviones.push(avion2)
    }

    function eventos(){
        document.getElementById("reservar").addEventListener("click", reservarVuelo);
    }

    function reservarVuelo(){
        origen = prompt("Escriba su cuidad de origen")
        destino = prompt("Escriba su ciudad de destino")
        fecha_ida = prompt("Escriba su fecha de ida")
        fecha_vuelta = prompt("Escriba su fecha de vuelta")
        let nueva_reserva = new Reservas(origen,destino,fecha_ida,fecha_vuelta)
        nueva_reserva.asignar_avion_ida(aviones[0]);
        nueva_reserva.asignar_avion_vuelta(aviones[1])
        let nuevo_pasajero = asignar_pasajeros();
        nueva_reserva.avion_ida.agregar_pasajero(nuevo_pasajero)
        nueva_reserva.avion_vuelta.agregar_pasajero(nuevo_pasajero)

        dibujar_resultados(nueva_reserva)
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
        let apellidos = prompt("Escribe tus apellidos")
        let nro_documento = prompt("Escribe tu documento")
        let pasajero = new Pasajeros(nombre,apellidos,nro_documento)
        return pasajero;
    }

    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion=parametros.Ubicacion;
            configurar();
            eventos();
        },
    };
}();

class Aviones{
    constructor(matricula,modelo,nro_asientos,capacidad_minima){
        this.matricula = matricula;
        this.modelo = modelo;
        this.nro_asientos = nro_asientos;
        this.capacidad_minima = capacidad_minima;
        this.habilitado = false;
        this.reservado = 0;
        this.pasajeros = []
    }

    agregar_pasajero(pasajero){
        if(this.reservado >= this.capacidad_minima){
            this.habilitado = true;
        }
        this.pasajeros.push(pasajero);
        this.reservado ++;
    }
}

class Reservas{
    constructor(origen, destino, fecha_ida, fecha_vuelta){
        this.origen = origen;
        this.destino = destino;
        this.fecha_ida = fecha_ida;
        this.fecha_vuelta = fecha_vuelta;
        this.avion_ida = null;
        this.avion_vuelta = null;
    }

    asignar_avion_ida(avion) {
        this.avion_ida = avion;
    }
    asignar_avion_vuelta(avion){
        this.avion_vuelta = avion;
    }
}

class Pasajeros{
    constructor(nombres, apellidos, nro_documento){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.nro_documento = nro_documento
    }
}