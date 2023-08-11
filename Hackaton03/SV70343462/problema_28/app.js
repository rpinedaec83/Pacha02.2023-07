
let contador = 1;
let suma = 0;


do {
    suma = suma + contador;
    contador++;
} while (contador <= 100);

document.querySelector('.suma').innerHTML = `La suma de los primeros cien números es: ${suma}`