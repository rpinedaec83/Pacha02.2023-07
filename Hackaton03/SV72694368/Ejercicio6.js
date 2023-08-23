function ejercicio6() {
    let respuesta=prompt("Ingrese el número de horas trabajadas:")    

    let n1 = parseInt(respuesta);

    let n2, n3, resultado;
    n2 = n1 * 20;

    if (n1 > 40) {
        n3 = n1 - 40;
      resultado = n2 + n3 * 5;
    } else {
        if (n1 <= 40) {
            resultado = n2;
        }
    }
    alert('Total a pagar: '+ resultado);
}

    ejercicio6();