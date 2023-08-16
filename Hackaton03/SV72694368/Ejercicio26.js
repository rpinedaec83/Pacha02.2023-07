function ejercicio26() {
    let n1=prompt('Numerador: ')    
    let n = parseInt(n1);
    let n2=prompt('Denominador: ')    
    let d = parseInt(n2);
    let rest, cont;
    rest = 0;
    cont = 0;

    while (n >= d) {
        n = n - d;
        rest = n;
        cont = cont + 1;
    }

    alert('El resto es: ' + rest);
    alert('El cociente es: ' + cont);
}

ejercicio26();
