function ejercicio5() {
    let respuesta=prompt("Ingrese el número de zapatos:")    

    let n1 = parseInt(respuesta);
    let n2, resultado;
    n2 = n1 * 80;

    if (n1 > 10 && n1 < 21) {
      resultado = n2 - n2 * 0.1;
    } else {
        if (n1 > 20 && n1 < 30) {
            resultado = n2 - n2 * 0.2;
        } else {
            if (n1 > 30) {
            resultado = n2 - n2 * 0.4;
            } else {
            resultado = n2;
            }
        }
    }

    alert('Total a pagar: '+ resultado);
}

    ejercicio5();
    