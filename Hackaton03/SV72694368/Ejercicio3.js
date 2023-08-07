function ejercicio3() {
    let respuesta=prompt("Ingresa un número:")    

    let n = parseInt(respuesta);

    if (n % 10 === 4) {
        alert("El número " + n + " sí termina en 4");
    } else {
        alert("El número " + n + " no termina en 4");
    }
}  

    ejercicio3();