function ejercicio11() {
    let n1=prompt("Ingresa el primer numero:")    
    let a = parseFloat(n1);
    let n2=prompt("Ingresa el primer numero:")    
    let b = parseFloat(n2);
    let n3=prompt("Ingresa el primer numero:")    
    let c = parseFloat(n3);
    

    if (a !== b && a !== c && b !== c) {
        if (a > b) {
            if (a > c) {
            alert('El número mayor es '+ a);
            } else {
                alert('El número mayor es: '+ c);
            }
        } else {
            if (b > c) {
                alert('El número mayor es '+ b);
            } else {
                alert('El número mayor es '+ c);
            }
        }
    } else {
        alert('Ingresa 3 números diferentes');
    }
}

    ejercicio11();