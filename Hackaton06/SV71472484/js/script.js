const repararCelular = function () {
    let vSistema;
    let tecnicos = [];
    let telefonos = [];
    let imei = [];

    function configurar(){
        $("#sistema").text(vSistema);
        cargaUsuario();
        crear_telefonos();
        crear_tecnicos();
        crear_imei();
        registarTelefonos();
        cargarTelefonos();
        //validarCelular();
    }
    function cargaUsuario(){
        let strLogin = sessionStorage.getItem("login");
        let objLogin = JSON.parse(strLogin);
        if(strLogin != null){
            $("#modal-512127").text(`Bienvenido: ${objLogin.email}`)
            $("#sede").text(`Sede: ${objLogin.sede}`)
        }
    }
   function crear_telefonos(){
    tel1 = new Telefono(0,"MOTOROLA","MOTO G51","123456789","351202360424560","PANTALLA ROTA",500,"PANTALLA")
    telefonos.push(tel1);
    tel2 = new Telefono(1,"SAMSUNG","A52","012345678","331202461426569","PANTALLA ROTA",500,"PANTALLA")
    telefonos.push(tel2);
    tel2 = new Telefono(2,"XIAOMI","REDMI NOTE 12s","123406780","331204461426569","FALLA DE BATERIA",200,"BATERIA")
    telefonos.push(tel2);
   }
   function crear_tecnicos(){
    teco1 = new Tecnicos ("T01","Luis Bolivar",0,"MOTOROLA")
    tecnicos.push(teco1);
    teco2 = new Tecnicos("T02","Jose Bolivar",1,"SAMSUNG")
    tecnicos.push(teco2);
    teco3 = new Tecnicos("T02","Jose Bolivar",2,"XIAOMI")
    tecnicos.push(teco3)
    }
    function crear_imei(){
        repor1 = new Imeis ("331202461426569")
        imei.push(repor1);
       }

    function eventos() {
        $("#form").submit(function (event) {
            let formData = {
              email: $("#email").val(),
              pass: $("#pass").val(),
              sede: $("#vSede").val(), 
             
            };          
            sessionStorage.setItem("login",JSON.stringify(formData));
            sessionStorage.setItem("sede",JSON.stringify(formSede));
            event.preventDefault();
            cargaUsuario();
          });

          $("#form_sede").submit(function (event) {
            let formSede = {
              sede: $("#vSede").val(),             
            };       
            localStorage.setItem("sede",JSON.stringify(formSede));
            event.preventDefault();
            cargaSede();
          });
    }

    function registarTelefonos(){
        telefonos.forEach(elemento => {
            if(elemento.imei == imei[0].nImei){
                telefonos[elemento.id].rReportado("SI");
                telefonos[elemento.id].rDiagnostico("");
                telefonos[elemento.id].calcularMitad(0);
                telefonos[elemento.id].agregarRepuestos("");
                telefonos[elemento.id].agregarEstado("REPORTADO")          
            }
            else{
                telefonos[elemento.id].rReportado("NO");
                telefonos[elemento.id].calcularMitad(elemento.total);
                telefonos[elemento.id].asignarTecnico(tecnicos[elemento.id])
                telefonos[elemento.id].agregarEstado("REPARADO")
            }
            localStorage.setItem("telefonos",JSON.stringify(telefonos[elemento.id]));
        });
    }
    function cargarTelefonos(){
        $('#telefonos').empty();
        let strHtml =`<table class="table table-sm">
        <thead>
            <tr>
                <th>
                    Marca
                </th>
                <th>
                    Modelo
                </th>
                <th>
                    Serie
                </th>
                <th>
                    Imei
                </th>
                <th>
                    Estado
                </th>
                <th>
                    Reportado 
                </th>
                <th>
                Tecnico
            </th>
            <th>
            Total
            </th>
            <th>
            Adelanto
            </th>
            <th>
            Restante de Pago
            </th>
            </tr>
        </thead>
        <tbody>`
        telefonos.forEach(element => {
          strHtml +=  `<tr>
          <td>
              ${element.marca}
          </td>
          <td>
              ${element.modelo}
          </td>
          <td>
              ${element.numeroSerie}
          </td>
          <td>
              ${element.imei}
          </td>
          <td>
            ${element.estado}
         </td>
          <td>
           ${element.reportado}
          </td>
          <td>
          ${element.tecnico}
         </td>
         <td>
         ${element.total}
        </td>
        <td>
        ${element.mitad}
       </td>
       <td>
       ${element.mitad}
      </td>
      </tr>
      <tr><td id ="detalle_${element.id}" ></td></tr>`
        });
        strHtml += `</tbody>
        </table>`;
        $('#telefonos').html(strHtml);
    }

    return {
        init: function (parametros) {
            vSistema = parametros.vSistema;
            eventos();
            configurar();
        },
    };
}();

class Telefono{
    constructor(id,marca,modelo,numeroSerie, imei,diagnostico,total,repuestos){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.diagnostico = diagnostico;
        this.total = total;
        this.repuestos = repuestos;
        this.estado = 'Pendiente';
        this.reportado ='';       
        this.mitad = 0;
        this.tecnico = null;  
        }
        rReportado(reportado){
            this.reportado = reportado;
        }
        rDiagnostico(diagnostico){
            this.diagnostico = diagnostico
        }
        calcularMitad(total) {
            this.total = total
            this.mitad = total/2;
        }
        asignarTecnico(tecnico){
            this.tecnico = tecnico
        }
        agregarRepuestos(repuestos){
            this.repuestos = repuestos
        }
        agregarEstado(estado){
            this.estado = estado
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
class Imeis{
    constructor(nImei){
        this.nImei= nImei;
    }
}