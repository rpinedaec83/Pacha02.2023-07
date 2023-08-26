const my_page = function () {
    let titulo;
    let arr_helicopteros = [];

    function eventos() {
        window.addEventListener('load', load_pagina);
        let txt_nombre = document.getElementById("txt_nombre")
        let result = document.getElementById("result")
        txt_nombre.addEventListener("change", (event) => {
            result.textContent = `You like ${event.target.value}`;
        });
        let select_aviones = document.getElementById("select_aviones")
        select_aviones.addEventListener("change", (event) => {
            console.log(event.target.selectedOptions[0].text)
        });
        let boton = document.getElementById("boton_prueba")
        boton.addEventListener("click", button_clic)
        boton.addEventListener("mouseover", button_mouse)
    }
    function button_mouse(){
        console.log("se paso el mouse por el boton")
    }
    function button_clic() {
        console.log("se hizo click")
    }
    function load_pagina() {

        console.log('La página ha terminado de cargarse!!');

    }

    function configurar() {
        let div = document.getElementById("div1");
        div.innerHTML = "<h1>" + titulo + "</h1>"
        div.style.backgroundColor = "black"
        div.style.color = "white"
        let title = document.getElementsByTagName("title");
        title[0].text = titulo;
        let divs = document.getElementsByClassName("cls_div")
        for (let index = 0; index < divs.length; index++) {
            const element = divs[index];
            element.innerHTML = `<a>${index}</a>`

        }
        console.log(divs)
        let pagina_externa = document.getElementById("pagina_externa")
        console.log(pagina_externa.href)
        pagina_externa.setAttribute("href", "https://www.idat.edu.pe")
        crear_select()

        obj_1 = {
            name: "Kamov Ka-50",
            code: "Ka-50"
        }
        obj_2 = {
            name: "Mil Mi-28",
            code: "Mi-28"
        }
        obj_3 = {
            name: "Kamov Ka-31",
            code: "Ka-31"
        }
        arr_helicopteros.push(obj_1)
        arr_helicopteros.push(obj_2)
        arr_helicopteros.push(obj_3)


        crear_helicopteros();
    }

    function crear_helicopteros() {
        let select = document.createElement("select");
        arr_helicopteros.forEach(element => {
            console.log(element.name)
            console.log(element.code)
            let option = document.createElement("option");
            option.setAttribute("value", element.code);
            let optionTexto = document.createTextNode(element.name);
            option.appendChild(optionTexto);
            select.appendChild(option);
        });
        document.body.appendChild(select);
    }
    function crear_select() {

        let select = document.createElement("select");
        select.setAttribute("id", "select_aviones")

        let option1 = document.createElement("option");
        option1.setAttribute("value", "F16");
        let option1Texto = document.createTextNode("Lockheed Martin F-16 Fighting Falcon");
        option1.appendChild(option1Texto);

        let option2 = document.createElement("option");
        option2.setAttribute("value", "SU-57");
        let option2Texto = document.createTextNode("Sukhoi Su-57");
        option2.appendChild(option2Texto);

        let option3 = document.createElement("option");
        option3.setAttribute("value", "F22");
        let option3Texto = document.createTextNode("Lockheed Martin F-22 Raptor");
        option3.appendChild(option3Texto);

        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);

        document.body.appendChild(select);
    }
    return {
        init: function (parametros) {
            titulo = parametros.titulo;
            configurar();
            eventos();
        },

    };
}();

function checkCookies() {
    console.log("Chequeando las coockies")
}