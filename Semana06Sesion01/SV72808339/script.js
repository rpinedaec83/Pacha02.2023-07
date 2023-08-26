const my_page = function () {
    let titulo;
    let arr_helicopteros = [];

    function configurar(){

        let div = document.getElementById("div1")
        div.innerHTML = "<h1>"+titulo+"</h1>"

        div.style.backgroundColor = "black"
        div.style.color = "white"

        let title = document.getElementsByTagName("title");
        title[0].text = titulo;
        console.log(titulo)
        let divs = document.getElementsByClassName("cls_div")
        for (let i = 0; i < divs.length; i++) {
            const element = divs[i];
            element.innerHTML = `<a>${i}</a>`
            
        }
        console.log(divs)
        let pagina_externa = document.getElementById("pagina_externa")
        pagina_externa.setAttribute("href","https://www.idat.edu.pe")
        console.log(pagina_externa.href)
    }

    function crear_select() {

        let select = document.createElement("select");

        let option1 = document.createElement("option");
        option1.setAttribute("value","F16")
        let option1_texto = document.createTextNode("Loockheed Martin F-16 Fighting Falcon");
        option1.appendChild(option1_texto)

        let option2 = document.createElement("option");
        option2.setAttribute("value","SU-57")
        let option2_texto = document.createTextNode("Sukhoi Su-57");
        option2.appendChild(option2_texto)

        let option3 = document.createElement("option");
        option3.setAttribute("value","F22")
        let option3_texto = document.createTextNode("Loockheed Martin F-22 Falcon");
        option3.appendChild(option3_texto)

        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
    } 

    function crear_helicopteros(){
        let select = document.createElement("select");
        arr_helicopteros.forEach(element => {
            console.log(element.name)
            console.log(element.code)
            let option = document.createElement("option");
            option1.setAttribute("value",element.code)
            let option_texto = document.createTextNode(element.name);
            option.appendChild(option_texto)      
            select.appendChild(option)      
        });
    }

    return {
        init: function(parametros) {
            titulo = parametros.titulo;
            configurar();
        }
    }
}();