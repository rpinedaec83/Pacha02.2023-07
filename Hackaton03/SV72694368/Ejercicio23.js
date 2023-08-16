function ejercicio23() {
    let n1=prompt('Ingresa el total de números')    
    let n = parseFloat(n1);
    let pares, impares;

    pares = 0;
    impares = 0;

    while (n > 0) {
        if (n % 2 !== 0) {
            impares = impares + n;
        }
        n = n - 1;
    }
    alert('La suma de los números impares es:'+ impares);
}

    ejercicio23();