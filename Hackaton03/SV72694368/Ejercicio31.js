function Ejercicio31() {
  let cont = 0;
  let cont1 = 0;
  let cont2 = 0;
  let sum1 = 0;
  let sum2 = 0;
  let med1 = 0;
  let med2 = 0;

  while (cont < 10) {
    let respuesta=prompt('Ingrese un número: ')    
    let n = parseFloat(respuesta);
    if (n > 0) {
      sum1 = sum1 + n;
      cont1 = cont1 + 1;
    } else {
      sum2 = sum2 + n;
      cont2 = cont2 + 1;
    }

    cont = cont + 1;
  }

  if (cont1 > 0) {
    med1 = sum1 / cont1;
    alert('La media de los números positivos es: '+ med1);
  } else {
    alert('No se han ingresado números positivos.');
  }

  if (cont2 > 0) {
    med2 = sum2 / cont2;
    alert('La media de los números negativos es: '+ med2);
  } else {
    alert('No se han ingresado números negativos.');
  }
}

Ejercicio31();
