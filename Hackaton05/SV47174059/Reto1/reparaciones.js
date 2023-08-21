// Definición de la clase Teléfono
class Telefono {
    constructor(numeroSerie, imei) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.diagnostico = '';
      this.autorizacionUsuario = false;
      this.abono = 0;
      this.estado = 'En revisión';
    }
  
    // Métodos para obtener/actualizar el estado del teléfono
    obtenerEstado() {
      return this.estado;
    }
  
    actualizarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
  
    // Método para guardar el primer diagnóstico
    guardarDiagnostico(diagnostico) {
      this.diagnostico = diagnostico;
    }
  
    // Método para obtener información del teléfono
    obtenerInformacion() {
      return `Número de Serie: ${this.numeroSerie}\nIMEI: ${this.imei}\nDiagnóstico: ${this.diagnostico}\nAutorización de Usuario: ${this.autorizacionUsuario ? 'Autorizado' : 'No autorizado'}\nAbono: ${this.abono}% pagado\nEstado: ${this.estado}`;
    }
  }
  
  // Definición de la clase Sucursal
  class Sucursal {
    constructor(nombre) {
      this.nombre = nombre;
      this.tecnicos = [];
      this.reparaciones = [];
    }
  
    // Método para agregar técnicos a la sucursal
    contratarTecnico(tecnico) {
      this.tecnicos.push(tecnico);
    }
  
    // Método para iniciar una reparación
    iniciarReparacion(telefono, tecnico, diagnosticoInicial) {
      telefono.actualizarEstado('En revisión');
      telefono.guardarDiagnostico(diagnosticoInicial);
      this.reparaciones.push({ telefono, tecnico });
    }
  
    // Método para autorizar una reparación
    autorizarReparacion(telefono) {
      telefono.autorizacionUsuario = true;
      telefono.actualizarEstado('Esperando repuestos');
    }
  
    // Método para agregar repuestos a una reparación
    agregarRepuestos(telefono, repuestos) {
      // Lógica para agregar repuestos a la reparación
      // Puedes implementar esto según tus necesidades
    }
  
    // Método para mostrar el estado de los equipos en la sucursal
    mostrarEstadoEquipos() {
      for (const reparacion of this.reparaciones) {
        console.log(`Equipo en reparación:\n${reparacion.telefono.obtenerInformacion()}`);
      }
    }
  }
  
  // Definición de la clase Técnico
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  
    // Método para verificar si el técnico tiene las habilidades necesarias
    tieneHabilidadesParaReparar(telefono) {
      return this.skills.some(skill => telefono.marca === skill);
    }
  }
  
  // Ejemplo de uso
  const telefono1 = new Telefono('12345', 'IMEI123');
  const tecnico1 = new Tecnico('Técnico 1', ['Samsung']);
  const sucursal1 = new Sucursal('Sucursal A');
  
  sucursal1.contratarTecnico(tecnico1);
  sucursal1.iniciarReparacion(telefono1, tecnico1, 'Pantalla rota');
  sucursal1.mostrarEstadoEquipos();
  sucursal1.autorizarReparacion(telefono1);
  sucursal1.mostrarEstadoEquipos();
  