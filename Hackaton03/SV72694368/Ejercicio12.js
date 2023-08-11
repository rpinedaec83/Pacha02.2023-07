function ejercicio12() {
    let n1=prompt("Ingresa numero 1:")    
    let a = parseFloat(n1);
    let n2=prompt("Ingresa numero 2:")    
    let b = parseFloat(n2);
    
    if (a !== b) {
        if (a > b) {
            alert('El número mayor es '+ a);
        } else {
            alert('El número mayor es '+ b);
        }
    } else {
        alert('Los números son iguales');
    }
}

    ejercicio12();