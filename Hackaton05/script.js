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

const tecnicos = [
  new Tecnico('Técnico 1', ['Samsung', 'Apple']),
  new Tecnico('Técnico 2', ['Huawei', 'Xiaomi']),

];

function registroCliente() {
  const numeroSerie = prompt('Ingrese el número de serie del teléfono:');
  const imei = prompt('Ingrese el IMEI del teléfono:');
  

  const telefono = new Telefono(numeroSerie, imei);

  const diagnostico = prompt('Realice el primer diagnóstico:');
  telefono.agregarDiagnostico(diagnostico);

  const abono = parseFloat(prompt('Ingrese el abono del 50% para autorizar la reparación:'));
  telefono.autorizarReparacion(abono);

  const repuestoNombre = prompt('Ingrese el nombre del repuesto:');
  const repuestoPrecio = parseFloat(prompt('Ingrese el precio del repuesto:'));
  const repuesto = new Repuesto(repuestoNombre, repuestoPrecio);
  telefono.agregarRepuesto(repuesto);

  const tecnico = asignarTecnico(telefono);
  telefono.estado = `En reparación por ${tecnico.nombre}`;

  mostrarInformacion(telefono);
}

function asignarTecnico(telefono) {
  for (const tecnico of tecnicos) {
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
  const output = document.getElementById('output');
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



