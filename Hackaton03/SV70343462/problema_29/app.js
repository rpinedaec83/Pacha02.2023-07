let contador = 1;
let suma = 0;

while (contador <= 100) {
    suma = suma + contador;
    contador = contador + 1;
}

document.querySelector('.suma').innerHTML = `La suma de los primeros cien números es: ${suma}`;