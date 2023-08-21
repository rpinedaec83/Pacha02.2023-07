const repararCelular = function () {
    let vSistema;
    let vSede;
    let tecnicos = [];

    function configurar(){
        let titulo = document.getElementById("sistema");
        titulo.innerHTML = vSistema
        let sede = document.getElementById("sede")
        sede.innerText = vSede;
        crear_tecnicos();
    }

   function crear_tecnicos(){
    teco1 = new Tecnicos ("T01","Luis Bolivar",1,"MOTOROLA")
    tecnicos.push(teco1);
    teco2 = new Tecnicos("T02","Jose Bolivar",2,"SAMSUNG")
    tecnicos.push(teco2);
    teco3 = new Tecnicos("T02","Jose Bolivar",3,"XIAOMI")
    tecnicos.push(teco3)
    }

    function eventos(){
        document.getElementById("ingresar").addEventListener("click", ingresarCelular);
    }

    function ingresarCelular(){
        nSerie = prompt("Escriba numero de serie")
        nImei = prompt("Escriba numero de imei")
        let verificarImei = new Telefono(nSerie,nImei)
        let sSiNo = prompt("Validar con el portal de OSIPTEL y poner: \n 1 -> SI ESTA REPORTADO \n 2 -> NO ESTA REPORTADO")
        if(verificarImei.verificaImei(sSiNo) == true){
            alert("IMEI REPORTADO!!! NO SE PUEDE CONTINUAR")
        }
        else{
            let diagnostico = prompt("Registar Primer Diagnostico")
            verificarImei.rDiagnostico(diagnostico)
            let total = prompt("Registar Total del Servicio")
            let mitad = verificarImei.calcularMitad(total)
            let autoriza = prompt(`Registrar Autorizacion y abono del 50%: ${mitad} \n 1 -> SI \n 2 -> NO`)
            if(autoriza == '1'){
                let marcaCel = prompt("Ingresar Marca \n 1 -> MOTOROLA \n 2-> SAMSUNG \n 3 -> XIAOMI")
                verificarImei.asignarTecnico(tecnicos[marcaCel - 1])
                let repuestos = prompt("Agregar Repuestos")
                verificarImei.agregarRepuestos(repuestos)
                mostrar_resultado(verificarImei)
            } 
            else{
                alert("NO PROCEDE EL SERVICIO")
            }
        }
    }

    function mostrar_resultado(servicio){
        console.log(servicio);

        let marca = document.getElementById("marca")
        marca.innerText =  servicio.tecnico.vMarcaTelefono;
        let serie = document.getElementById("serie")
        serie.innerText =  servicio.numeroSerie;
        let imei = document.getElementById("imei")
        imei.innerText =  servicio.imei;
        let diagnostico = document.getElementById("diagnostico")
        diagnostico.innerText =  servicio.diagnostico;
        let costo = document.getElementById("costo")
        costo.innerText =  servicio.total;
        let abono = document.getElementById("abono")
        abono.innerText =  servicio.mitad;
        let tecnico = document.getElementById("tecnico")
        tecnico.innerText =  servicio.tecnico.vNombres;
        let repuestos = document.getElementById("repuestos");
        repuestos.innerText =  servicio.repuestos;
        let pago = document.getElementById("pago")
        pago.innerText =  servicio.mitad;

        let div_servicio =document.getElementById("div_servicio");
        div_servicio.style.display  = "block";
    }

    return {
        init: function (parametros) {
            vSistema = parametros.vSistema;
            vSede= parametros.vSede;
            eventos();
            configurar();
        },
    };
}();

class Telefono{
    constructor(numeroSerie, imei){
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.diagnostico ='';
        this.total = 0;
        this.mitad = 0;
        this.tecnico = null;
        this.repuestos ='';
        }
        verificaImei(sino){
           if(sino == '1'){ 
            return true;
           }else{
            return false;
           }
        }
        rDiagnostico(diagnostico){
            this.diagnostico = diagnostico
        }
        calcularMitad(total) {
            this.total = total
            this.mitad = total/2;
            return this.mitad
        }
        asignarTecnico(tecnico){
            this.tecnico = tecnico
        }
        agregarRepuestos(repuestos){
            this.repuestos = repuestos
        }

}
class Tecnicos{
    constructor(tCodigo,vNombres,iCodTel,vMarcaTelefono){
        this.tCodigo = tCodigo;
        this.vNombres = vNombres;
        this.iCodTel = iCodTel;
        this.vMarcaTelefono = vMarcaTelefono;
    }
}