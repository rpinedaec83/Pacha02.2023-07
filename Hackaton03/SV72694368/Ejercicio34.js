function Ejercicio34() {
  let i, j, prod;

  for (i = 1; i <= 9; i++) {
    console.log('Tabla del número ', i, ':');
    for (j = 1; j <= 12; j++) {
      prod = i * j;
      console.log(i, ' x ', j, ' = ', prod);
    }
  }
}

Ejercicio34();
