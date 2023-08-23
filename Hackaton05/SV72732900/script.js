/*Variables iniciales*/ 
const models = {
    "samsung": ["Galaxy F14", "Galaxy Z Flip5", "Galaxy A34", "Galaxy A04", "Galaxy F34"],
    "xiaomi": ["Redmi 12 5G", "Poco F5", "Redmi A2", "Poco x5", "12 T"],
    "apple": ["Iphone 14 Pro", "Iphone 14", "Iphone 13 Pro Max", "Iphone 13 mini", "Iphone 12", "iPad 10.2"],
}
const tecnicos = []
let customer = null;
let phone_ = null;

/*Declaracion de clases*/
class usuario {
    constructor(nombres, doc){
        this.nombres = nombres;
        this.doc = doc;
    }
}

class cliente extends usuario {
    constructor(nombres, doc, telefono = null){
        super(nombres, doc)
        this.telefono = telefono;
    }

    set set_Telefono(telefono){
        this.telefono = telefono;
    }
}

class tecnico extends usuario{
    constructor(nombres, doc, habilidad){
        super(nombres, doc)
        this.habilidad = habilidad;
    }
}

class telefono {
    constructor(marca = "", modelo = "", IMEI = ""){
        this.marca = marca;
        this.modelo = modelo;
        this.IMEI = IMEI;
        this.esReportado = false;
    }

    set set_marca(marca = ""){
        this.marca = marca;
    }

    set set_modelo(modelo = ""){
        this.mnodelo = modelo;
    }

    set set_IME(IME = ""){
        this.IMEI = IME;
    }

    evaluarReporte(IME = ""){
        this.esReportado = !(Math.random() < 0.89)
        return this.esReportado
    }
}

class diagnostico {
    constructor(telefono){
        this.esAceptado = false;
        this.falla = null;
        this.telefono = telefono;
        this.precio = 0.0
    }

    evaluarFalla (falla){
        console.log("El equipo requiere reparacion de placa")
        this.esAceptado = true
    }
}

class atencion {
    constructor(cliente, telefono){
        this.id = Date.now();
        this.diagnosticos = [];
        this.tecnico = null;
        this.autorizacionCliente = false;
        this.price = 0;
    }

    set set_tecnico(tecnico){
        this.tecnico = tecnico;
    }

    evaluarAutorizacionCliente(pago = 0.0, patron=""){
        if((this.diagnosticos[0].precio * 0.5) <= pago && patron == "SI ACEPTO"){
            return true;
        }else{
            return false;
        }
    }
}

/*Aqui empieza el proceso principal*/
initialCondition();
cargarTecnicos();



/*Zona de funciones*/
function saveCustomer(){
    if (!!document.getElementById("fname").value && !!document.getElementById("fdocument").value){
        let custName =  document.getElementById("fname").value.toString();
        let custDocument = document.getElementById("fdocument").value.toString();
        customer = new cliente(custName, custDocument);
        secondCondition();
    }
    else(
        alert("Debe ingresar información valida")
    )
}

function savePhone(){
    phone_ = new telefono();
    if (!!document.getElementById("fdoc_input").value && !!document.getElementById("modelo").innerHTML && !!document.getElementById("marca").innerHTML){
        if(!phone_.evaluarReporte(document.getElementById("fdoc_input").value.toString())){
            let marca =  document.getElementById("marca").innerHTML.toString();
            let modelo = document.getElementById("modelo").innerHTML.toString();
            let IMEI = document.getElementById("fdoc_input").value.toString();
            phone_.set_marca = marca;
            phone_.set_modelo = modelo;
            phone_.set_IME = IMEI;
            phoneRegisteredCondition();
            alert("El telefono se encuentra sin reportes\n¡Telefono registrado!")
        }else(
            alert("El telefono se encuentra reportado")
        )
    }
    else(
        alert("Debe ingresar información valida")
    )
}


function changeBrand(values){
    document.getElementById("marca").innerHTML = values;
    let modelo = document.getElementById("myModel");
    modelo.innerHTML = '';
    document.getElementById("modelo").innerHTML = ""
    for (item of models[values.toLowerCase()]){
        let model_item = document.createElement("a");
        model_item.innerHTML = item
        model_item.addEventListener("click", changeModel);
        modelo.appendChild(model_item)  
    }
}

function changeModel(values){
    document.getElementById("modelo").innerHTML = values.target.innerHTML
}

function initialCondition(){
    let btnBrand = document.getElementById("dropbtn_marca");
    let btnModel = document.getElementById("dropbtn_modelo");
    let btnUpdate = document.getElementById("phoneBtn");
    document.getElementById("fdoc_input").disabled = true;
    document.getElementById("phoneBtn").disabled = true;
    document.getElementById("marca").innerHTML = "";
    document.getElementById("modelo").innerHTML = "";
    btnBrand.classList.remove("dropbtn")
    btnBrand.classList.add("deactive")
    btnModel.classList.remove("dropbtn")
    btnModel.classList.add("deactive")
    btnUpdate.classList.remove("dropbtn")
    btnUpdate.classList.add("deactive")
    document.getElementById("stateInfo").innerHTML = "Registro de cliente"
}

function secondCondition(){
    document.getElementById("fdoc_input").disabled = false;
    document.getElementById("phoneBtn").disabled = false;
    document.getElementById("dropbtn_marca").classList.add("dropbtn");
    document.getElementById("dropbtn_marca").classList.remove("deactive");
    document.getElementById("dropbtn_modelo").classList.add("dropbtn");
    document.getElementById("dropbtn_modelo").classList.remove("deactive");
    document.getElementById("phoneBtn").classList.add("dropbtn");
    document.getElementById("phoneBtn").classList.remove("deactive");
    document.getElementById("fname").disabled = true;
    document.getElementById("fdocument").disabled = true;
    document.getElementById("customerBtn").classList.remove("customerBtn")
    document.getElementById("customerBtn").classList.add("deactive")
    document.getElementById("stateInfo").innerHTML = "Registro y validación de equipo"
}

function phoneRegisteredCondition(){
    document.getElementById("phoneBtn").classList.remove("dropbtn")
    document.getElementById("phoneBtn").classList.add("validated")
    document.getElementById("phoneBtn").innerHTML = "Registrado";
    let btnBrand = document.getElementById("dropbtn_marca");
    let btnModel = document.getElementById("dropbtn_modelo");
    let btnUpdate = document.getElementById("phoneBtn");
    document.getElementById("customerBtn").disabled = true;
    document.getElementById("phoneBtn").disabled = true;
    document.getElementById("fdoc_input").disabled = true;
    btnBrand.classList.remove("dropbtn")
    btnBrand.classList.add("deactive")
    btnModel.classList.remove("dropbtn")
    btnModel.classList.add("deactive")
    btnUpdate.classList.remove("dropbtn")
    btnUpdate.classList.add("deactive")
    document.getElementById("stateInfo").innerHTML = "Diagnostico inicial" 
}

function cargarTecnicos(){
    tecnicos.push(new tecnico("Pedro Barrantes", "12345", "pantalla"));
    tecnicos.push(new tecnico("Miguel Quiroga", "67891", "tarjeta")); 
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myBrand() {
    document.getElementById("myBrand").classList.toggle("show");
}

function myModel() {
    document.getElementById("myModel").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



