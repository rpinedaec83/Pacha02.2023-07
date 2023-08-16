function ejercicio20() {
    let n1=prompt("Ingresa numero 1:")    
    let a = parseFloat(n1);
    let n2=prompt("Ingresa numero 2:")    
    let b = parseFloat(n2);
    let n3=prompt("Ingresa numero 3:")    
    let c = parseFloat(n3);
    let n4=prompt("Ingresa numero 4:")    
    let d = parseFloat(n4);
    let pares = 0;
    let mayor = 0;
    let promedio = 0;

    if (a % 2 === 0) {
        pares = pares + 1;
    }

    if (b % 2 === 0) {
        pares = pares + 1;
    }

    if (c % 2 === 0) {
        pares = pares + 1;
    }

    if (d % 2 === 0) {
        pares = pares + 1;
    }

    if (a > b && a > c && a > d) {
        mayor = a;
    } else {
        if (b > c && b > d) {
            mayor = b;
        } else if (c > d) {
            mayor = c;
        } else {
            mayor = d;
        }
    }
    alert('La cantidad de números pares:'+ pares);
    alert('El mayor de todos es:'+ mayor);

    if (c % 2 === 0) {
        alert('El cuadrado del segundo es:'+ b * b);
    }

    if (a < d) {
        promedio = (a + b + c + d) / 4;
        alert('El promedio de todos los números es:'+ promedio);
    }

    if (b > c) {
        if (c >= 50 && c <= 700) {
            alert('El tercer número está comprendido entre 50-700');
            alert('La suma de los cuatro números es:'+ a + b + c + d);
        } else {
            alert('El tercer número no está comprendido entre 50-700');
        }
    }
}

    ejercicio20();