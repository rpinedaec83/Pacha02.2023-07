let num, suma, cantidad;

suma = 0;
cantidad = 0;


do {
    num = parseInt(prompt('Ingresar un número:'));

    if (num >= 0) {
        suma = suma + num;
        cantidad = cantidad + 1;
    }

    if (cantidad > 0) {
        let media = suma / cantidad;
        document.querySelector('.media').innerHTML = `La media de los números ingresados es: ${media}.`;
    }
    else {
        document.querySelector('.media').innerHTML = `No se ingresaron números positivos.`
    }
   
} while (num > 0);

