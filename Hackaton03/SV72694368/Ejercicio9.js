function ejercicio9() {
    let respuesta=prompt('Ingrese sueldo del trabajador:')    

    let n1 = parseFloat(respuesta);

    let resultado;

    if (n1 >= 0) {
        if (n1 > 2000) {
            alert('Se le otorga un aumento del 5%');
            resultado = n1 + n1 * 0.05;
        } else {
            if (n1 <= 2000) {
            resultado = n1 + n1 * 0.1;
            }
        }
    } else {
        alert('Dato inválido');
      return; // Salir de la función si el dato es inválido
    }
    alert('Total a pagar: '+ resultado);
}

    ejercicio9();