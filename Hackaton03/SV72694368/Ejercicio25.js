function ejercicio25() {
    let n1=prompt("Ingresa numero :")    
    let numero = parseFloat(n1);
    let factorial, x;

    if (numero < 0) {
        alert('El número'+ numero+ 'no se puede calcular');
    } else {
        x = 1;
        factorial = 1;
    
        while (x <= numero) {
            factorial = factorial * x;
            x = x + 1;
        }
        alert('El factorial del número '+ numero+ ' es '+ factorial);
    }
}

    ejercicio25();