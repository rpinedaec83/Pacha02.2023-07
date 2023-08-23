function ejercicio1() {

    let respuesta=prompt("Ingresa un número:")    

    let n = parseInt(respuesta);

    if (n > -1000 && n < -99) {
        alert("El número " + n + " tiene 3 dígitos");
    } else {
        if (n > 99 && n < 1000) {
            alert("El número " + n + " tiene 3 dígitos");
        } else {
            alert("El número " + n + " no tiene 3 dígitos");
        }
    }
}

    ejercicio1();