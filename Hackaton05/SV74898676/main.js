//-creando entidades:

//-entidad Telefono.
class Telefono {

    //-constructor de clase.
    constructor(numeroSerie, imei, marca, modelo) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.modelo = modelo;
      this.diagnostico = '';
      this.estado = 'En espera';
    }
  
    //-métodos de clase.
    
    //-realizando la primera revisión y guardar el diagnóstico
    realizarPrimeraRevision(diagnostico) {
      this.diagnostico = diagnostico;
      this.estado = 'Diagnóstico listo';
    }
  }

//-entidad Cliente.
class Cliente {
  constructor(nombre, autorizacionEscrita, abono) {
    this.nombre = nombre;
    this.autorizacionEscrita = autorizacionEscrita;
    this.abono = abono;
  }
}

//-entidad Tecnico.
class Tecnico {
  constructor(nombre, skills) {
    this.nombre = nombre;
    this.skills = skills;
  }
}

//-entidad Reparacion.
class Reparacion {
  constructor(telefono, cliente, tecnico) {
    this.telefono = telefono;
    this.cliente = cliente;
    this.tecnico = tecnico;
    this.repuestos = [];
    this.estado = 'En revisión';
  }

  //-métodos de clase

  //-para agregar repuesto
  agregarRepuesto(repuesto) {
    this.repuestos.push(repuesto);
  }

  //-para cambiar estado de reparación
  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}

//-entidad Repuesto.
class Repuesto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

function main() {
    const _telefono = new Telefono('12345', '67890', 'Samsung', 'Galaxy S10');
    const _cliente = new Cliente('Juan Perez', true, 0.5); // Autorización escrita y abono del 50%
    const _tecnico = new Tecnico('Carlos', ['Samsung', 'Apple']); // Técnico con habilidades en Samsung y Apple
    const _reparacion = new Reparacion(_telefono, _cliente, _tecnico);

    _reparacion.realizarPrimeraRevision('Pantalla rota');
    _reparacion.agregarRepuesto(new Repuesto('Pantalla', 50));
    _reparacion.cambiarEstado('En proceso');
    console.log(_reparacion);
}

main();