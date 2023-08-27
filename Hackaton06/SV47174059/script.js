// Clase Telefono
class Telefono {
    constructor(numeroSerie, IMEI, reportado = false) {
      this.numeroSerie = numeroSerie;
      this.IMEI = IMEI;
      this.reportado = reportado;
    }
  }
  
  // Clase Revision
  class Revision {
    constructor(diagnostico) {
      this.diagnostico = diagnostico;
    }
  }
  
  // Clase Usuario
  class Usuario {
    constructor(autorizacion, abono) {
      this.autorizacion = autorizacion;
      this.abono = abono;
    }
  }
  
  // Clase Reparacion
  class Reparacion {
    constructor() {
      this.diagnostico = '';
      this.estado = 'En espera';
      this.repuestos = [];
    }
  
    autorizarReparacion(usuario, costoReparacion) {
      if (usuario.autorizacion && usuario.abono >= 0.5 * costoReparacion) {
        this.estado = 'En proceso';
      } else {
        this.estado = 'Pendiente de autorización';
      }
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  
    // Otros métodos para el flujo de trabajo
  }
  
  // Clase Tecnico
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  }
  
  // Ejemplo de uso:
//   const telefono = new Telefono('12345', '67890');
//   const revision = new Revision('Pantalla rota');
//   const usuario = new Usuario(true, 200);
//   const tecnico = new Tecnico('Juan', ['Samsung', 'iPhone']);
//   const reparacion = new Reparacion();
  
//   const costoReparacion = 300;
  
  reparacion.autorizarReparacion(usuario, costoReparacion);
  reparacion.agregarRepuesto('Pantalla');
  
  console.log(reparacion);





  class Reparacion {
    constructor() {
      this.diagnostico = '';
      this.estado = 'En espera';
      this.repuestos = [];
    }
  
    autorizarReparacion(usuario) {
      if (usuario.autorizacion && usuario.abono >= 0.5 * costoReparacion) {
        this.estado = 'En proceso';
      } else {
        this.estado = 'Pendiente de autorización';
      }
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  
    // Otros métodos para el flujo de trabajo
  }
  
  // Ejemplo de uso:
  const reparacion = new Reparacion();
  const usuario = new Usuario();
  reparacion.autorizarReparacion(usuario);
  reparacion.agregarRepuesto('Pantalla');
  
  




// Clase Telefono
class Telefono {
    constructor(numeroSerie, IMEI, reportado = false) {
      this.numeroSerie = numeroSerie;
      this.IMEI = IMEI;
      this.reportado = reportado;
    }
  }
  
  // Clase Revision
  class Revision {
    constructor(diagnostico) {
      this.diagnostico = diagnostico;
    }
  }
  
  // Clase Usuario
  class Usuario {
    constructor(autorizacion, abono) {
      this.autorizacion = autorizacion;
      this.abono = abono;
    }
  }
  
  // Clase Reparacion
  class Reparacion {
    constructor() {
      this.diagnostico = '';
      this.estado = 'En espera';
      this.repuestos = [];
    }
  
    autorizarReparacion(usuario, costoReparacion) {
      if (usuario.autorizacion && usuario.abono >= 0.5 * costoReparacion) {
        this.estado = 'En proceso';
      } else {
        this.estado = 'Pendiente de autorización';
      }
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  
    // Otros métodos para el flujo de trabajo
  }
  
  // Clase Tecnico
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  }
  
  // Ejemplo de uso:
//   const telefono = new Telefono('12345', '67890');
//   const revision = new Revision('Pantalla rota');
//   const usuario = new Usuario(true, 200);
//   const tecnico = new Tecnico('Juan', ['Samsung', 'iPhone']);
//   const reparacion = new Reparacion();
  
//   const costoReparacion = 300;
  
  reparacion.autorizarReparacion(usuario, costoReparacion);
  reparacion.agregarRepuesto('Pantalla');
  
  console.log(reparacion);



  // Clase Sucursal
class Sucursal {
    constructor(nombre) {
      this.nombre = nombre;
      this.reparacionesEnCurso = [];
    }
  
    // Agregar una reparación a la sucursal
    agregarReparacion(reparacion) {
      this.reparacionesEnCurso.push(reparacion);
    }
  
    // Consultar el estado de todas las reparaciones en esta sucursal
    consultarEstadoReparaciones() {
      console.log(`Estado de las reparaciones en la sucursal ${this.nombre}:`);
      this.reparacionesEnCurso.forEach((reparacion, index) => {
        console.log(`Reparación ${index + 1}: ${reparacion.estado}`);
      });
    }
  }
  
  // Ejemplo de uso:
  const sucursalA = new Sucursal('Sucursal A');
  const sucursalB = new Sucursal('Sucursal B');
  
  const reparacion1 = new Reparacion();
  const reparacion2 = new Reparacion();
  
  sucursalA.agregarReparacion(reparacion1);
  sucursalB.agregarReparacion(reparacion2);
  
  reparacion1.autorizarReparacion(usuario, costoReparacion);
  reparacion2.autorizarReparacion(usuario, costoReparacion);
  
  // Consultar el estado de las reparaciones en cada sucursal
  sucursalA.consultarEstadoReparaciones();
  sucursalB.consultarEstadoReparaciones();



// Función para autorizar una reparación en el servidor
function autorizarReparacionEnServidor(reparacion, usuario) {
    // Supongamos que tienes un endpoint "/autorizar" en tu servidor
    const url = '/autorizar';
  
    // Supongamos que el servidor espera un objeto JSON con datos de la reparación y el usuario
    const data = {
      reparacion,
      usuario,
    };
  
    // Enviar la solicitud POST al servidor
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, actualizar el estado de la reparación
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error al autorizar la reparación:', error);
      });
  }
  
  // Ejemplo de uso
  autorizarReparacionEnServidor(reparacion, usuario);
  
   