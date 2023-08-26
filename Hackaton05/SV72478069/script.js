// Definición de clases

class Telefono {
    constructor(numeroSerie, imei, marca, modelo) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.reportado = false;
        this.diagnostico = '';
        this.autorizacionUsuario = false;
        this.abonoReparacion = 0;
        this.estado = 'En espera';
    }

    reportar() {
        this.reportado = true;
    }

    realizarDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
    }

    obtenerAutorizacion(autorizado) {
        this.autorizacionUsuario = autorizado;
    }

    realizarAbono(abono) {
        this.abonoReparacion = abono;
    }

    actualizarEstado(estado) {
        this.estado = estado;
    }
}

class Tecnico {
    constructor(nombre, habilidades) {
        this.nombre = nombre;
        this.habilidades = habilidades;
    }

    tieneHabilidad(marca) {
        return this.habilidades.includes(marca);
    }
}

class Reparacion {
    constructor() {
        this.repuestos = [];
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }
}

// Creación de objetos

const telefono1 = new Telefono('0987654321', 'IMEI123450', 'Samsung', 'Galaxy S23 Ultra');
const tecnico1 = new Tecnico('Juan Carlos', ['Samsung', 'Apple']);
const reparacion1 = new Reparacion();

// Flujo de uso

if (!telefono1.reportado) {

    telefono1.realizarDiagnostico('Pantalla rota');
    telefono1.obtenerAutorizacion(true);
    telefono1.realizarAbono(300);
    telefono1.actualizarEstado('Diagnóstico realizado');

    if (tecnico1.tieneHabilidad(telefono1.marca)) {
        reparacion1.agregarRepuesto('Pantalla nueva');
        telefono1.actualizarEstado('Reparación en proceso');
    } else {
        telefono1.actualizarEstado('Esperando a técnico con habilidades adecuadas');
    }
} else {
    telefono1.actualizarEstado('Teléfono reportado, no se puede reparar');

}

console.log(telefono1, tecnico1);
console.log(reparacion1);


