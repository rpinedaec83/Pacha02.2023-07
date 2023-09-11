const models = {
    "samsung": [{"Galaxy F14": "https://specs-tech.com/wp-content/uploads/2023/03/Samsung-Galaxy-F14-3.jpg"}],
    "xiaomi": [{"Redmi 12 5G": "https://i03.appmifile.com/462_item_in/02/08/2023/626c3a6e96bab03730207dc940039f3f.jpg"}],
    "apple": [{"Iphone 14 Pro": "https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-9907.jpg" }],
}

let atenciones = []
let sucursal_ = null

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


class atencion {
    constructor(cliente, sucursal = ""){
        this.id = parseInt(Math.random()*10000000);
        this.cliente = cliente;
        this.diagnosticos = [];
        this.tecnico = null;
        this.autorizacionCliente = false;
        this.patron = "";
        this.adelanto = 0.0;
        this.estado = 1;
        this.sucursal = sucursal;
    }

    evaluarAutorizacionCliente(pago = 0.0, patron=""){
        if((this.diagnosticos[0].precio * 0.5) <= pago && patron == "SI ACEPTO"){
            return true;
        }else{
            return false;
        }
    }

    get get_sucursal(){
        return this.sucursal;
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
        this.precio = 0.0;
    }

    evaluarFalla (falla){
        console.log("El equipo requiere reparacion de placa")
        this.esAceptado = true
    }
}


const my_page = function () {
    let titulo;

    function configurar() {
        if (typeof (Storage) !== "undefined") {
            console.log("WebStorage Habilitado")
        } else {
            alert("No se puede usar webStorage")
        }
        crearEstructura();
        filtrarAtenciones();
    }

    function crearEstructura(){
        if (!localStorage.getItem("atenciones")){
        let aten1 = new atencion(new cliente("Marco Zapata", "95721989", new telefono("samsung", "Galaxy F14", "337174526847089")),"principal")
        let aten2 = new atencion(new cliente("Ramiro Valencia", "34095959", new telefono("xiaomi", "Redmi 12 5G", "352544728526741")),"principal")
        let aten3 = new atencion(new cliente("Maria Altamirano", "14157494", new telefono("apple", "Iphone 14 Pro", "Iphone 14")), "secundaria")
        atenciones.push(aten1, aten2, aten3)
        localStorage.setItem("atenciones", JSON.stringify(atenciones))}
        document.getElementById("login_container").classList.add("invisible")
        document.getElementById("login_close").addEventListener("click", ()=>{
            document.getElementById("login_container").classList.add("invisible")
        })
    }

    function eliminarAtencion(event){
        let btn_index = event.target.attributes[0].value.split("_")[1];
        let atenciones_ = JSON.parse(localStorage.getItem("atenciones"));
        let index = atenciones_.findIndex(item=>{ return item.id.toString() === btn_index});
        atenciones_.splice(index, 1);
        localStorage.setItem("atenciones", JSON.stringify(atenciones_));
        filtrarAtenciones();
    }

    function cargarAtencionesDOM(){
        let atenciones_ = JSON.parse(localStorage.getItem("atenciones"))
        atenciones = []
        atenciones = [...atenciones_]
        let services_ = document.getElementById("services")
        services_.innerHTML = ""
        for (const item of atenciones){
            if (item.sucursal === sucursal_){
            let card_service = document.createElement("div")
            let card_img = document.createElement("img")
            let estado_ = document.createElement("h3")
            let estado_span = document.createElement("span")
            
            let ID_ = document.createElement("h3")
            ID_.classList.add("text-sm", "font-bold")
            ID_.innerHTML = "ID: "
            let ID_span = document.createElement("span")
            ID_span.classList.add("font-normal")
            ID_span.setAttribute("id", "id_" + item.id)
            ID_span.innerHTML = item.id
            ID_.appendChild(ID_span)
            
            
            let cliente_ = document.createElement("h3")
            cliente_.classList.add("text-sm", "font-bold")
            cliente_.innerHTML = "Cliente: "
            let cliente_span = document.createElement("span")
            cliente_span.classList.add("font-normal")
            cliente_span.setAttribute("id", "cliente_" + item.id)
            cliente_span.innerHTML = item.cliente.nombres
            cliente_.appendChild(cliente_span)

            estado_.classList.add("text-sm","font-bold")
            estado_.innerHTML = "Estado: 1/4"
            card_service.setAttribute("id", "card_" + item.id)
            card_service.classList.add("w-48", "h-48", "border-[1px]", "border-slate-600", "rounded-lg", "pt-3", "flex", "items-center", "flex-col", "relative")
            card_img.classList.add("w-24", "h-24","rounded-lg", "object-cover")
            card_img.setAttribute("src", models[item.cliente.telefono.marca][0][item.cliente.telefono.modelo])
            
            let close_btn = document.createElement("div")
            close_btn.addEventListener("click", eliminarAtencion)
            close_btn.setAttribute("id", "close_" + item.id)
            close_btn.classList.add("cursor-pointer", "font-bold", "text-white", "w-6", "h-6", "flex", "justify-center", "items-center", "bg-black", "rounded-full", "absolute", "right-[-10px]", "top-[-10px]")
            close_btn.innerHTML = "x"
            card_service.append(card_img, estado_, ID_, cliente_, close_btn)
            services_.appendChild(card_service)
            }
        }
    }

    function filtrarAtenciones(){
        let sucurSelect = document.getElementById("sucursales")
        sucursal_ = sucurSelect.options[sucurSelect.selectedIndex].value;
        document.getElementById("currentSuc").innerHTML = sucursal_.toUpperCase();
        cargarAtencionesDOM()
    }

    function openModal(){

    }

    function abrirLogin(){
        if (!JSON.parse(sessionStorage.getItem("currentUser"))){
            document.getElementById("login_container").classList.remove("invisible")
        }
    }

    function eventos() {
        console.log("eventos")
    }

    function onsubmitForm(){
        console.log("Hola Mundo")
        let user = document.getElementById("name_").value; 
        sessionStorage.setItem("currentUser", JSON.stringify(new usuario(user.toString(), "123456789")));
        document.getElementById("login_container").classList.add("invisible");
        document.getElementById("userName").innerHTML = user.toString();
        // event.preventDefault();
    }
    
    return {
        init: function (parametros) {
            titulo = parametros.titulo;
            configurar();
            eventos();
        },
        filtrarAtenciones,
        abrirLogin,
        onsubmitForm
    };
}();

