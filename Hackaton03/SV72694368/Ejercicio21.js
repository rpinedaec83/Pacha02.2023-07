function ejercicio21() {
    let n1=prompt("Ingresa un numero:")    
    let numero = parseInt(n1);
    let contador;
    let factorial;

    contador = 1;
    factorial = 1;

    while (contador < numero) {
        contador = contador + 1;
        factorial = factorial * contador;
    }
    alert('Factorial:'+ factorial);
}

    ejercicio21();