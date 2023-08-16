function Ejercicio32() {
  let cont1 = 1;

  while (cont1 <= 3) {
    console.log('Ingrese población del distrito número '+ cont1+ ':');
    let may = 0;
    let cont2 = 1;

    while (cont2 <= 11) {
      console.log('Población de la provincia n'+ cont2+ ' del distrito número '+ cont1+ ':');
      let pob = parseInt(prompt('Ingrese la población: '));

      if (pob > may) {
        may = pob;
      }

      cont2++;
    }

    console.log('La población mayor de la provincia '+ cont1+ ' es: '+ may);
    cont1++;
  }
}

Ejercicio32();
