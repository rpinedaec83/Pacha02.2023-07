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
    return {
        init: function (parametros) {
            titulo = parametros.titulo;
            configurar();
        },

    };
}();