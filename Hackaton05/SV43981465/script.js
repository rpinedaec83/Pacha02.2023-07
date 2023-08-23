const ReparacionesCelular = function (){
    let osiptel = [];
    let repuestos = [];
    let celulares = [];
    let sucursales = [];
    let costoTotal = 0;
    //Arreglo de número de serie e IMEI reportados
    osiptel = [
        { numeroSerie: 'A123', imei: 'IMEI1'},
        { numeroSerie: 'B456', imei: 'IMEI2'},
        { numeroSerie: 'C789', imei: 'IMEI3'}
    ];
    //Matriz de repuestos: [tipo, precio]
    repuestos = [
        ['pantalla', 50],
        ['bateria', 40],
        ['pieza', 20],
        ['cargador', 10]
    ];
    
    function eventos(){
        document.getElementById("celular").addEventListener("click", registrarCelular);
        document.getElementById("diagnostico").addEventListener("click", registrarPrimerDiagnostico);
        document.getElementById("autorizacionCliente").addEventListener("click", solicitarAutorizacionCliente);
        document.getElementById("registroAbono").addEventListener("click", registrarAbono);
        document.getElementById("reparaEquipo").addEventListener("click", repararEquipo);
    }

    function registrarCelular(){
        numeroSerie = prompt("Ingresar número de serie:");
        imei = prompt("Ingresar IMEI:");
        marca = prompt("Ingresar marca del celular:");
        let nuevoRegistroCelular = new Celular(numeroSerie, imei, marca);
        if(nuevoRegistroCelular.verificarReporte(osiptel)){
            alert('En espera de revisión.');
            return celulares.push(nuevoRegistroCelular);
        }else{
            alert('El celular está reportado y no puede ser accedido para el servicio');
        }
    }

    function registrarPrimerDiagnostico(){
        alert('Diagnosticos a registrar: 1. pantalla rota, 2. bateria dañada, 3. pieza a reemplazar, 4. cargador faltante/dañado')
        let diagnostico = prompt("Ingresar diagnóstico identificado:");
        //celulares.map(celular => celular.realizarPrimerDiagnostico(diagnostico));
        let sucursal1 = new Sucursal('Sucursal A');
        celulares[0].realizarPrimerDiagnostico(diagnostico);
        sucursales.push(sucursal1);
        sucursales[0].recibirEquipoEnRevision(celulares[0]);
        alert('Registro realizado');
        alert(`Diagnostico del celular (${celulares[0].numeroSerie}): (${celulares[0].diagnostico})`);
    }

    function solicitarAutorizacionCliente(){
        let autorizacionCliente = prompt("Desea autorizar la reparación del celular (Si/No):");
        if(autorizacionCliente == 'Si'){
            celulares[0].obtenerAutorizacion(true);
            const objetoComoTexto = JSON.stringify(celulares[0], null, 2);
            alert(objetoComoTexto);

        }else{
            alert('No hay conformidad del cliente');
            celulares.length = 0;
            alert(celulares[0]);
        }
    }

    function registrarRepuestosDelDiagnostico(){
        if (celulares[0].diagnostico.toLowerCase().includes('pantalla rota')) {
            celulares[0].agregarRepuesto('pantalla');
          }
          if (celulares[0].diagnostico.toLowerCase().includes('bateria dañada')) {
            celulares[0].agregarRepuesto('bateria');
          }
          if (celulares[0].diagnostico.toLowerCase().includes('pieza a reemplazar')) {
            celulares[0].agregarRepuesto('pieza');
          }
          if (celulares[0].diagnostico.toLowerCase().includes('cargador faltante/dañado')) {
            celulares[0].agregarRepuesto('cargador');
          }
    }

    function calcularCostoTotalReparacion(){
        let costoBase = 30;
        registrarRepuestosDelDiagnostico();
        let repuesto = celulares[0].repuestos;
        let costoRepuestos = 0;
        for (const [tipoRepuesto, precioRepuesto] of repuestos) {
          if (repuesto == tipoRepuesto) {
            costoRepuestos += precioRepuesto;
          }
        }
        costoTotal = costoBase + costoRepuestos;
        return costoTotal;
    }

    function mostrarEstado(){
        let estado = 'En espera de revisión';
        if(celulares[0].reportado){
            estado = 'Reportado';
        }else if(celulares[0].reparacionCompleta){
            estado = 'Reparacion completada';
        }else if(celulares[0].abono >= costoTotal * 0.5){
            estado = 'En reparación';
        }
        return estado;
    }

    function registrarAbono(){
        alert(`El costo de la reparación es de: ${calcularCostoTotalReparacion()}`);
        let mitadAbono = prompt("Ingresar 50% del pago:");
        celulares[0].realizarAbono(mitadAbono);
        alert('Abono realizado');
    }

    function repararEquipo(){
        const tecnico1 = new Tecnico('Juan', ['Samsung', 'Apple']);
        const tecnico2 = new Tecnico('Pedro',['Xiaomi', 'Huawei']);
        if(celulares[0].autorizacion == true || celulares[0].abono >= costoTotal*0.5){
            if(sucursales[0].asignarTecnicoParaReparacion(celulares[0], tecnico1) == true){
                alert(mostrarEstado());
            }else{
                if(sucursales[0].asignarTecnicoParaReparacion(celulares[0], tecnico2) == true){
                    alert(mostrarEstado());
                    alert('Cuente hasta 5...');
                }else{
                    alert(`No tenemos técnicos con el skill para la marca ${celulares[0].marca}`);
                }
            }
        }else{
            alert('Falta autorización de cliente y/o abono del 50% por la reparación');
        }
        sucursales[0].completarReparacion(celulares[0]);
        alert(mostrarEstado());
    }

    return {
        init: function () {
            eventos();
        },
    };
}();

class Celular{
    constructor(numeroSerie, imei, marca){
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.reportado = false;
        this.diagnostico = '';
        this.autorizacion = false;
        this.abono = 0;
        this.reparacionCompleta = false;
        this.repuestos = [];
    }

    verificarReporte(osiptel) {
        //Simulación para la verificación de reporte por simplicidad
        const esReportado = osiptel.some(ingreso => ingreso.numeroSerie == this.numeroSerie || ingreso.imei == this.imei);

        if(esReportado){
            this.reportado = true;
            return false;
        }
        return true;
    }

    realizarPrimerDiagnostico(diagnostico){
        this.diagnostico = diagnostico;
    }

    obtenerAutorizacion(autorizacion){
        this.autorizacion = autorizacion;
    }

    realizarAbono(abono){
        this.abono = abono;
    }

    agregarRepuesto(repuesto){
        this.repuestos.push(repuesto);
    }

    completarReparacion(){
        this.reparacionCompleta = true;
    }
}

class Tecnico{
    constructor(nombre, skills){
        this.nombre = nombre;
        this.skills = skills;
    }

    tieneSkillParaMarca(marca){
        return this.skills.includes(marca);
    }
}

class Sucursal{
    constructor(nombre){
        this.nombre = nombre;
        this.equiposEnRevision = [];
        this.equiposEnReparacion = [];
        this.equiposReparados = [];
    }

    recibirEquipoEnRevision(celular){
        /*if(!celular.verificarReporte()){
            alert('El celular está reportado y no puede ser recibido en revisión.');
            return;
        }*/
        this.equiposEnRevision.push(celular);
    }

    asignarTecnicoParaReparacion(celular, tecnico){
        //Verificar si el tecnico tiene las habilidades necesarias para la marca del celular
        if(tecnico.skills.includes(celular.marca)){
            const index = this.equiposEnRevision.indexOf(celular);
            if(index != -1){
                this.equiposEnRevision.splice(index, 1);
                this.equiposEnReparacion.push(celular);
                alert(`El técnico ${tecnico.nombre} está reparando el celular ${celular.numeroSerie}`);
                return true;
            }
        }else{
            alert(`El técnico ${tecnico.nombre} no tiene habilidades para reparar celulares de marca ${celular.marca}`);
            return false;
        }
    }

    completarReparacion(celular){
        const index = this.equiposEnReparacion.indexOf(celular);
        if(index != -1){
            celular.completarReparacion();
            this.equiposEnReparacion.splice(index, 1);
            this.equiposReparados.push(celular);
            alert(`El celular ${celular.numeroSerie} ha sido reparado y está listo para ser entregado.`);
        }
    }

    /*mostrarEstadoEquipos(){
        alert('Equipos en revision:', this.equiposEnRevision.map(celular => celular.numeroSerie));
        alert('Equipos en reparacion:', this.equiposEnReparacion.map(celular => celular.numeroSerie));
        alert('Equipos reparados', this.equiposReparados.map(celular => celular.numeroSerie));
    }*/
}

//Crear instancias de las clases
/*const celular1 = new Celular('12345', 'IMEI123', 'Samsung');
const tecnico1 = new Tecnico('Juan', ['Samsung', 'Apple']);
const sucursal1 = new Sucursal('Sucursal A');*/


//Ejemplo de uso
/*celular1.verificarReporte();
celular1.realizarPrimerDiagnostico('Pantalla rota');
celular1.obtenerAutorizacion(true);
celular1.realizarAbono(100);
celular1.agregarRepuesto('pantalla');
sucursal1.recibirEquipoEnRevision(celular1);
sucursal1.asignarTecnicoParaReparacion(celular1,tecnico1);
celular1.completarReparacion(celular1);*/

//Mostrar estado de los equipos en la sucursal
//sucursal1.mostrarEstadoEquipos();
//alert('Estado del celular: ', celular1.mostrarEstadoEquipos)
//alert('Estado del celular: ', celular1.mostrarEstado());
//alert('Costo de la reparación: ',celular1.calcularCostoReparacion());


