let suma = 0;

for (let i = 1; i <=100; i++){
    suma = suma + i;
}

document.querySelector('.suma').innerHTML = `La suma de los primeros cien números es: ${suma}`;