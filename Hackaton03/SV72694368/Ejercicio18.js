function ejercicio18() {
    let respuesta=prompt('Ingrese número de CDs:')    
    let ventas = parseInt(respuesta);
    let total;
    total = 0;

    if (ventas <= 9) {
        total = ventas * 10;
    } else if (ventas <= 99) {
        total = ventas * 8;
    } else if (ventas <= 499) {
        total = ventas * 7;
    } else if (ventas > 499) {
        total = ventas * 6;
    }
    alert('Total a pagar por el cliente:'+ total);
    alert('Ganancias del vendedor:'+ total * 0.0825);
}

    ejercicio18();