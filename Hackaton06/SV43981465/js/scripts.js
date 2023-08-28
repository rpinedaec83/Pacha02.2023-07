let productos=[];
let arrCarrito = [];
const my_page = function () {
    let titulo;
    let osiptel = [];
    let celulares = [];
    let sucursales = [];
    let costoTotal = 0;
    //Arreglo de número de serie e IMEI reportados
    osiptel = [
        { numeroSerie: 'A123', imei: 'IMEI1'},
        { numeroSerie: 'B456', imei: 'IMEI2'},
        { numeroSerie: 'C789', imei: 'IMEI3'}
    ];
    function configurar() {
        if (typeof (Storage) !== "undefined") {
            console.log("WebStorage Habilitado")
        } else {
            alert("No se puede usar webStorage")
        }
        let title = document.getElementsByTagName("title");
        title[0].text = titulo;
        cargaUsuario();
        cargarCarrito();
        crearEstructura();
        cargarProductos();
    }
    function cargaUsuario(){
        let strLogin = sessionStorage.getItem("login");
        let objLogin = JSON.parse(strLogin);
        if(strLogin != null){
            $("#modal-443788").text(`Hola ${objLogin.email}`)
        }
    }
    
    function cargarCarrito(){
        strCarrito = localStorage.getItem("carrito");
        arrCarrito = JSON.parse(strCarrito);
        alert(strCarrito);
        $("#nroItems").text(arrCarrito.length);
    }

    function registrarPrimerDiagnostico(){
        let diagnostico = prompt("Ingresar diagnóstico identificado:");
        let sucursal1 = new Sucursal('Sucursal A');
        celulares[0].realizarPrimerDiagnostico(diagnostico);
        sucursales.push(sucursal1);
        sucursales[0].recibirEquipoEnRevision(celulares[0]);
        alert('Registro realizado');
        alert(`Diagnostico del celular (${celulares[0].numeroSerie}): (${celulares[0].diagnostico})`);
        alert('Agregue al carrito el repuesto a usar');
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
            localStorage.clear();
        }
    }

    function registrarRepuestosDelDiagnostico(){
        let index = arrCarrito.length - 1;
        let repuesto = arrCarrito[index].repuesto;
        celulares[0].agregarRepuesto(repuesto);
        return arrCarrito[index].precio;
    }

    function calcularCostoTotalReparacion(){
        let costoBase = 30;
        let precioRepuesto = registrarRepuestosDelDiagnostico();
        let costoTotal = 0;
        costoTotal = costoBase + precioRepuesto;
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

    function repararEquipo(){
        const tecnico1 = new Tecnico('Juan', ['Samsung', 'Apple']);
        const tecnico2 = new Tecnico('Pedro',['Xiaomi', 'Huawei']);
        if(celulares[0].autorizacion == true || celulares[0].abono >= costoTotal*0.5){
            if(sucursales[0].asignarTecnicoParaReparacion(celulares[0], tecnico1) == true){
                alert(mostrarEstado());
                alert('Cuente hasta 5...');
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

    function registrarAbono(){
        alert(`El costo de la reparación es de: ${calcularCostoTotalReparacion()}`);
        let mitadAbono = prompt("Ingresar 50% del pago:");
        celulares[0].realizarAbono(mitadAbono);
        alert('Abono realizado');
    }

    function cargarProductos(){
        $('#productos').empty();
        let strHtml = " ";
        productos.forEach(element => {
            console.log(element.nombre)
          strHtml +=  `<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
            <div class="card shadow">
                <div class="card-body text-center">
                    <h3 class="text-warning">Repuestos disponibles</h3>
                    <a href="#">
                        <img class="card-img-top embed-responsive embed-responsive-16by9" src="${element.img}" alt="">
                    </a>
                    <div class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a class="text-reset" href="#"><h3 class="card-title display-4">${element.nombre}</h3></a>
                    <h6>$${element.precio}</h6>
                    <a class="btn btn-dark my-2" href="#" onclick="agregarCarrito(${element.id})" role="button">Add to Cart</a>
                </div>
            </div>
        </div>`
        });
        $('#productos').html(strHtml);
    }

    

    function crearEstructura(){
        objProducto={
            id:1,
            nombre:"Repuesto de pantalla",
            repuesto:"pantalla",
            precio: 40.00,
            img:"img/pantalla.jpg"
        }
        productos.push(objProducto);
        objProducto={
            id:2,
            nombre:"Repuesto de bateria",
            repuesto:"bateria",
            precio: 30.00,
            img:"img/bateria.jpg"
        }
        productos.push(objProducto);
        objProducto={
            id:3,
            nombre:"Repuesto de camara",
            repuesto:"camara",
            precio: 100.00,
            img:"img/camara.jpg"
        }
        productos.push(objProducto);
        objProducto={
            id:4,
            nombre:"Repuestos varios",
            repuesto:"repuesto",
            precio: 20.00,
            img:"img/repuesto.jpg"
        }
        productos.push(objProducto);
        objProducto={
            id:5,
            nombre:"Repuesto de cargador",
            repuesto:"cargador",
            precio: 10.00,
            img:"img/cargador.jpg"
        }
        productos.push(objProducto);
    }
    function eventos() {
        $("#form").submit(function (event) {
            let formData = {
              email: $("#email").val(),
              pass: $("#pass").val(),
             
            };
            
            sessionStorage.setItem("login",JSON.stringify(formData));
            event.preventDefault();
          });
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

    return {
        init: function (parametros) {
            titulo = parametros.titulo;
            configurar();
            eventos();
        },

    };
}();

function agregarCarrito(id){
    console.log(id);
    var item = productos.find(item => item.id === id);
    arrCarrito.push(item)
    localStorage.setItem("carrito",JSON.stringify(arrCarrito));
    $("#nroItems").text(arrCarrito.length)
}

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
}