
    function ejercicio4() {
    let n1=prompt("Ingresa numero 1:")    
    let a = parseFloat(n1);
    let n2=prompt("Ingresa numero 2:")    
    let b = parseFloat(n2);
    let n3=prompt("Ingresa numero 3:")    
    let c = parseFloat(n3);
   
        let aux;

    do {
        if (a > b) {
            aux = a;
            a = b;
            b = aux;
        }
        if (b > c) {
            aux = b;
            b = c;
            c = aux;
        }
    } while (a > b || b > c);

    console.log("Números ordenados de menor a mayor:");
    console.log(a);
    console.log(b);
    console.log(c);
}

    ejercicio4();
    
