class Telefono {
  constructor(numeroSerie, imei) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.diagnostico = '';
      this.autorizacion = false;
      this.abono = 0;
      this.repuestos = [];
      this.estado = 'En espera de revisión';
  }

  agregarDiagnostico(diagnostico) {
      this.diagnostico = diagnostico;
      this.estado = 'Diagnóstico realizado';
  }

  autorizarReparacion(abono) {
      this.autorizacion = true;
      this.abono = abono;
      this.estado = 'Esperando reparación';
  }

  agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
  }

  completarReparacion() {
      this.estado = 'Reparación completada';
  }
}

class Tecnico {
  constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
  }
}

class Repuesto {
  constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
  }
}

let tecnicos = [
  new Tecnico('Técnico 1', ['Samsung', 'Apple']),
  new Tecnico('Técnico 2', ['Huawei', 'Xiaomi']),

];

function registroCliente() {
  let numeroSerie = prompt('Ingrese el número de serie del teléfono:');
  let imei = prompt('Ingrese el IMEI del teléfono:');
  

  let telefono = new Telefono(numeroSerie, imei);

  let diagnostico = prompt('Realice el primer diagnóstico:');
  telefono.agregarDiagnostico(diagnostico);

  let abono = parseFloat(prompt('Ingrese el abono del 50% para autorizar la reparación:'));
  telefono.autorizarReparacion(abono);

  let repuestoNombre = prompt('Ingrese el nombre del repuesto:');
  let repuestoPrecio = parseFloat(prompt('Ingrese el precio del repuesto:'));
  let repuesto = new Repuesto(repuestoNombre, repuestoPrecio);
  telefono.agregarRepuesto(repuesto);

  let tecnico = asignarTecnico(telefono);
  telefono.estado = `En reparación por ${tecnico.nombre}`;

  mostrarInformacion(telefono);
}

function asignarTecnico(telefono) {
  for (let tecnico of tecnicos) {
      if (tecnico.skills.includes(telefono.marca)) {
          return tecnico;
      }
  }
  return tecnicos[0]; // Asignar el primer técnico por defecto si no hay una coincidencia de skills
}

function mostrarInformacion(telefono) {
  /*
  console.log(telefono);
  let telefonoserie = document.getElementById("telefonoserie")
        telefonoserie.innerText = telefono.numeroSerie;
  let telefonoimei = document.getElementById("telefonoimei")
        telefonoimei.innerText = telefono.imei;
  let telefonoestado = document.getElementById("telefonoestado")
        telefonoestado.innerText = telefono.estado;
  let telefonodiagnostico = document.getElementById("telefonodiagnostico")
        telefonodiagnostico.innerText = telefono.diagnostico;
  let telefonoautorizacion = document.getElementById("telefonoautorizacion")
        telefonoautorizacion.innerText = telefono.autorizacion;
  let telefonoabono = document.getElementById("telefonoabono")
        telefonoabono.innerText = telefono.abono;
  let telefonorepuesto = document.getElementById("telefonorepuesto")
        telefonorepuesto.innerText = telefono.repuesto.nombre;
*/
  let output = document.getElementById('output');
  output.innerHTML = `
      <h2>Estado del Teléfono</h2>
      <p>Número de Serie: ${telefono.numeroSerie}</p>
      <p>IMEI: ${telefono.imei}</p>
      <p>Estado: ${telefono.estado}</p>
      <p>Diagnóstico: ${telefono.diagnostico}</p>
      <p>Autorización: ${telefono.autorizacion ? 'Autorizado' : 'Pendiente'}</p>
      <p>Abono: $${telefono.abono.toFixed(2)}</p>
      <p>Repuestos: ${telefono.repuestos.map(repuesto => repuesto.nombre).join(', ')}</p>
  `;
}



