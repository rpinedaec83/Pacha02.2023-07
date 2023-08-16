function ejercicio14() {
    let respuesta=prompt('Ingresa un número del 1 al 9')    

    let num = parseInt(respuesta);

    if (num < 10 && num > 0) {
        switch (num) {
            case 2:
            case 3:
            case 5:
            case 7:
                alert('El número es primo');
            break;
            default:
                alert('El número no es primo');
        }
    } else {
        alert('No es un número del 1 al 9');
    }
}

    ejercicio14();