let productos=[];



const my_page = function () {
    let titulo;
    
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
        console.log(strCarrito);
        $("#nroItems").text(arrCarrito.length);
    }

    function cargarProductos(){
        $('#productos').empty();
        let strHtml =""
        productos.forEach(element => {
            console.log(element.nombre)
          strHtml +=  `<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
            <div class="card shadow">
                <div class="card-body text-center">
                    <h3 class="text-warning">Descuentos del ${element.descuento}% OFF</h3>
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
                    <h6>$199.99 <del class="text-muted ml-2">$${element.precio}</del></h6>
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
            nombre:"RX-78-2",
            descuento:20,
            precio: 120.99,
            img:"img/4.jpg"
        }
        productos.push(objProducto);
        objProducto={
            id:2,
            nombre:"AERIAL",
            descuento:15,
            precio: 140.99,
            img:"img/5.jpg"
        }
        productos.push(objProducto);
        objProducto={
            id:3,
            nombre:"Z Gok",
            descuento:40,
            precio: 130.99,
            img:"img/6.jpg"
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
    }
    
    
    return {
        init: function (parametros) {
            titulo = parametros.titulo;
            configurar();
            eventos();
        },

    };
}();

let arrCarrito = [];
function agregarCarrito(id){
    console.log(id);
    var item = productos.find(item => item.id ===id);
    arrCarrito.push(item)
    localStorage.setItem("carrito",JSON.stringify(arrCarrito));
    $("#nroItems").text(arrCarrito.length)
}