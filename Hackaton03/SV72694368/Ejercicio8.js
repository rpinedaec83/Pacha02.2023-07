function ejercicio8() {
    let a=prompt("Ingresa nota 1:")    
    let n1 = parseFloat(a);
    let b=prompt("Ingresa nota 2:")    
    let n2 = parseFloat(b);
    let c=prompt("Ingresa nota 3:")    
    let n3 = parseFloat(c);
    let promedio;

    promedio = (n1 + n2 + n3) / 3;

    if (promedio >= 0 && promedio <= 20) {
        if (promedio < 10.5) {
            alert("Promedio es "+ promedio);
            alert("Desaprobado");
        } else {
            if (promedio >= 10.5) {
                alert("Promedio es "+ promedio);
                alert("Aprobado");
            }
        }
    } else {
        alert("Datos inválidos");
    }
}

    ejercicio8();