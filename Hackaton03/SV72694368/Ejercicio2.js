function ejercicio2() {
    let respuesta=prompt("Ingresa un número:")    

    let n = parseInt(respuesta);

    if (n > 0) {
        alert('El número ' + n + ' es positivo');
    } else {
        if (n < 0) {
            alert('El número ' + n + ' es negativo');
        } else {
            alert('El número ' + n + ' es neutro');
        }
    }
}

    ejercicio2();