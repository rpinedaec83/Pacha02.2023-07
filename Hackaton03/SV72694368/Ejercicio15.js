function ejercicio15() {
    let respuesta=prompt('¿Desea convertir distancia o peso?(1-Distancia / 2-Peso')    
    let x = parseInt(respuesta);
    let pulgadas, kilo, distancia, peso;

    switch (x) {
        case 1:
            let n1=prompt('Ingrese la distancia en centímetros')    
            let distancia = parseFloat(n1);    
            pulgadas = distancia / 2.54;
            alert('Las pulgadas son:'+ pulgadas);
            break;
        case 2:
            let n2=prompt('Ingrese el peso en libras')    
            let peso = parseFloat(n2);        
            kilo = peso * (1 / 2.21);
            alert('Los kilogramos son:'+ kilo);
            break;
        default:
            alert('Opción inválida');
    }
}

    ejercicio15();