function ejercicio10() {
    let respuesta=prompt("Ingresa un número:")    
    let n = parseInt(respuesta);

    if (n === 0) {
        alert('El 0 es un número neutro');
    } else {
        if (n % 2 === 0) {
            alert(n, 'es un número par');
        } else {
            alert(n, 'No es un número par');
        }
    }
}

    ejercicio10();