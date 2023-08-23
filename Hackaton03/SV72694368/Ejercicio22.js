function ejercicio22() {
    let n1=prompt('Ingresa el valor de n:')    
    let n = parseInt(n1);
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma = suma + i;
    }
    alert('Valor de suma:'+ suma);
}

    ejercicio22();